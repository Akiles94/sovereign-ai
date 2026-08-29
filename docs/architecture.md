# Arquitectura Técnica

## Visión General

```
┌─────────────────────────────────────────────────────────────┐
│                     USUARIO FINAL                           │
│  (Startup, Empresa, Developer con API key)                  │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/REST API
                     │
┌────────────────────▼────────────────────────────────────────┐
│              API GATEWAY & ROUTING                          │
│  • Rate limiting por usuario                               │
│  • Autenticación (API keys)                                │
│  • Logging de requests (privado, no tracking)             │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
┌───────▼────────┐      ┌────────▼──────────┐
│  LOAD BALANCER │      │   ORCHESTRATOR    │
│  (Round Robin) │      │  (Kubernetes)     │
└───────┬────────┘      └────────┬──────────┘
        │                         │
    ┌───┴─────────────────────────┴───┐
    │    INFERENCE CLUSTER            │
    │                                 │
    │  ┌─────────────┐  ┌─────────────┐
    │  │ GPU Node 1  │  │ GPU Node 2  │
    │  │ (RTX 4090)  │  │ (RTX 4090)  │
    │  │ Llama 70B   │  │ Qwen 32B    │
    │  └─────────────┘  └─────────────┘
    │                                 │
    │  ┌─────────────┐  ┌─────────────┐
    │  │ GPU Node 3  │  │ GPU Node 4  │
    │  │ (RTX 4090)  │  │ (RTX 4090)  │
    │  │ Llama 70B   │  │ Qwen 32B    │
    │  └─────────────┘  └─────────────┘
    │                                 │
    └────────────────────────────────┘
            │
            └─────────┬──────────┐
                      │          │
          ┌───────────▼─┐  ┌────▼──────────┐
          │  MONITORING │  │ BILLING/LOGS  │
          │  & ALERTING │  │   (Privado)   │
          └─────────────┘  └───────────────┘
```

## Componentes Principales

### 1. **API Gateway**
- **Tecnología:** Nginx + FastAPI (Python)
- **Responsabilidades:**
  - Recibir requests HTTP
  - Validar API keys
  - Rate limiting (tokens/minuto por usuario)
  - Logging seguro (sin retener contenido)
  - Enrutamiento a workers disponibles

### 2. **Orchestrator**
- **Tecnología:** Kubernetes (lightweight)
- **Responsabilidades:**
  - Gestionar pods de inferencia
  - Escalado horizontal (agregar/quitar GPUs)
  - Health checks
  - Reintentos automáticos

### 3. **Inference Cluster**
- **Hardware:** GPUs RTX 4090 (4-8 unidades)
- **Modelos:**
  - **Llama 70B** (flagship, mejor calidad)
  - **Qwen 32B** (más rápido, menor latencia)
  - Opcionales: Mistral, otros modelos abiertos
- **Framework:** Vllm (optimizado para LLMs)

### 4. **Monitoring & Observability**
- **Herramientas:** Prometheus + Grafana
- **Métricas:** Latencia, throughput, GPU utilization, errores
- **Alertas:** Uptime, performance degradation

### 5. **Billing & Accounting**
- **Datos:** Tokens consumidos por usuario/día
- **Privacidad:** Logs locales, nunca sincronizados a terceros
- **Auditoría:** Mensual, compartida con comunidad

---

## Flujo de una Request

```
1. Usuario llamada: POST /api/v1/completions
   - Headers: Authorization: Bearer sk-xxxxx
   - Body: { "prompt": "...", "max_tokens": 100 }

2. API Gateway:
   - Valida API key ✓
   - Comprueba rate limit ✓
   - Genera request ID único

3. Orchestrator:
   - Selecciona GPU menos cargada
   - Encola request en queue

4. Inference Worker:
   - Carga modelo (si no está en VRAM)
   - Procesa tokens
   - Devuelve respuesta

5. API Gateway:
   - Registra consumo de tokens
   - Retorna response al usuario

6. Billing System:
   - Incrementa contador de "tokens consumidos hoy"
   - Notifica si usuario va a exceder límite
```

**Latencia esperada:** 200-500ms (prompt + completion)

---

## Escalabilidad

### Horizontal Scaling (Agregar GPUs)

- Cada GPU RTX 4090 = ~30-50 requests/segundo
- Año 1: 4 GPUs = 120-200 req/s capacity
- Año 2: Agregar 2 GPUs = 180-300 req/s
- Año 3: Segundo datacenter = 300-600 req/s

### Vertical Scaling (Modelos más rápidos)

- Qwen 32B: 2x más rápido que Llama 70B
- Distilado: Crear versiones lightweight (7B, 13B)
- Quantización: 8-bit precision para mayor throughput

---

## Privacidad & Seguridad

### ✅ Lo que Hacemos Bien

1. **Datos nunca salen del datacenter**
   - Procesamiento local, no cloud API calls
   - Logs almacenados localmente, no sincronizados

2. **Auditoría de código**
   - Stack open source (vllm, FastAPI, etc.)
   - Código de plataforma disponible para comunidad

3. **Encriptación en tránsito**
   - HTTPS obligatorio
   - TLS 1.3

4. **Acceso mínimo**
   - Solo billing system ve qué usuario llamó
   - Contenido de requests nunca se registra

### ⚠️ Lo que Requerimos Cautela

1. **Cumplimiento GDPR**
   - Usuarios pueden solicitar delete de sus datos
   - Tenemos 30 días para compliar
   - Plan: Logs con rotating deletion (90 días max)

2. **Acceso físico**
   - Colocation facility tiene seguridad estándar
   - Plan: Auditoría física anual

3. **Backdoors / 0-days**
   - Cualquier software tiene vulnerabilidades
   - Mitigación: Updates regulares, no usar versiones obsoletas

---

## Roadmap Técnico

### Meses 1-3: MVP
- [x] API endpoint básico
- [x] Auth + rate limiting
- [x] Single GPU setup
- [x] Monitoring básico

### Meses 4-6: Beta
- [ ] Multi-GPU orchestration
- [ ] 2+ modelos disponibles
- [ ] Dashboard de uso
- [ ] Scaling horizontal

### Meses 7-9: Producción
- [ ] 99.5% SLA
- [ ] Backup + disaster recovery
- [ ] API v2 (mejor error handling)

### Meses 10-12: Optimización
- [ ] Fine-tuning support
- [ ] Modelos especializados
- [ ] Análisis de costos por usuario

---

## Comparativa: Self-hosted vs. Sovereign AI

| Aspecto | Self-hosted | Sovereign AI |
|---------|------------|------------|
| **Capex (GPUs)** | €7,200 | €1,800 (tu parte) |
| **Opex (electricidad)** | €300/mes | €60/mes (tu parte) |
| **Expertise requerida** | Alta | Baja |
| **Uptime esperado** | 90% | 99%+ |
| **Complejidad** | Alta | Baja |
| **Privacidad** | Total | Total (contigo) |
| **Costo total Año 1** | €15-20k | €1,500-3,000 |

**Conclusión:** Para la mayoría, Sovereign AI es mejor trade-off entre privacidad, costo y complejidad.

---

## Tecnologías Utilizadas

- **Inferencia:** Vllm, Ollama (alternativa)
- **Orquestación:** Kubernetes (k3s lightweight)
- **API:** FastAPI (Python)
- **Monitoeo:** Prometheus, Grafana
- **Almacenamiento:** PostgreSQL (metadata), local volumes (modelos)
- **Logging:** ELK Stack (Elasticsearch, Logstash, Kibana) - local

**Philosophía:** Open source, sin vendor lock-in, auditables.
