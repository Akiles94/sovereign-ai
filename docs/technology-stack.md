# Stack Tecnológico

## Modelos de IA

### Llama 70B (Meta)
- **Capacidad:** 70 billones de parámetros
- **Performance:** SOTA en razonamiento, código, escritura
- **Velocidad:** ~20 tokens/seg en RTX 4090
- **Licencia:** Llama 2 Community License (comercial OK)
- **Uso:** Workloads de precisión, análisis complejos

### Qwen 32B (Alibaba)
- **Capacidad:** 32 billones de parámetros
- **Performance:** Muy competitivo con Llama 70B, 2x más rápido
- **Velocidad:** ~45 tokens/seg en RTX 4090
- **Licencia:** Qwen License (comercial OK)
- **Uso:** Workloads de baja latencia, chatbots

### Alternativas Consideradas

| Modelo | Params | Licencia | Razón |
|--------|--------|----------|-------|
| Mistral 8x7B | 56B | Apache 2.0 | Considerar en Año 2 |
| Llama 2 13B | 13B | Llama 2 License | Para mobile/edge |
| Deepseek | 67B | Comercial | Considerar post-benchmarks |

**Criterios de selección:**
1. Performance comparable a OpenAI/Anthropic
2. Licencia comercial clara
3. Comunidad de soporte activa
4. Eficiencia energética

---

## Infraestructura

### Hardware

#### GPU (Compute)
- **Modelo:** NVIDIA RTX 4090
- **Cantidad inicial:** 4 unidades (escalable)
- **VRAM:** 24GB cada una
- **Capacidad:** ~30-50 completions/seg por GPU
- **Costo:** €1,800 por unidad
- **Alternativa:** A100 (más caro, no necesario para MVP)

#### CPU (Host)
- **Servidor base:** 2-socket, 32+ cores
- **RAM:** 256GB DDR5
- **Storage:** NVMe 2TB (modelos), SATA 4TB (logs)
- **Networking:** 10GbE connectivity

#### Red
- **Conectividad:** Fibra óptica (>1Gbps)
- **Redundancia:** Dual ISP si es posible
- **Latencia:** <50ms a principales datacenters EU

---

## Stack de Software

> **DISCLAIMER:** Esta es una visión general de la arquitectura. Las tecnologías específicas serán seleccionadas minuciosamente en spikes técnicos cuando comience el desarrollo. Los detalles de implementación se decidirán basándose en benchmarks reales, requisitos operativos y aprendizajes comunitarios.

### Inferencia

Para servir modelos LLM de forma eficiente:
- Stack optimizado para LLMs con throughput alto
- Paged attention / memory optimization
- Dynamic batching para múltiples requests
- Alternativas evaluadas según performance

### API & Backend

Para exponer la infraestructura:
- Framework HTTP moderno con async nativo
- OpenAPI documentation automática
- Validación de inputs robusta
- Escalabilidad horizontal

### Orquestación

Para gestionar infraestructura:
- Sistema de orquestación ligero
- Auto-healing y escalado automático
- Declarativo y auditable
- Community-friendly (no vendor lock-in)

### Monitoring

**Prometheus + Grafana**
- **Prometheus:** Scraping de métricas
- **Grafana:** Dashboard, alertas
- **Métricas clave:**
  - GPU utilization, memoria VRAM
  - Request latency, throughput
  - Error rates, availability

### Logging

**ELK Stack (local)**
- **Elasticsearch:** Almacenamiento de logs
- **Logstash:** Parsing de logs
- **Kibana:** Visualización
- **Privacidad:** Todo local, no enviado a terceros

### Base de Datos

**PostgreSQL**
- **Propósito:** Metadata, usuarios, billing
- **Alternativa:** MySQL, SQLite (para MVP)

---

## Seguridad

### Autenticación

**API Keys (JWT)**
- Generadas al crear account
- Rotación: Usuario puede regenerar anualmente
- Revocación: Inmediata

### Encriptación

**En tránsito:**
- HTTPS/TLS 1.3 obligatorio
- No se aceptan conexiones HTTP

**En reposo:**
- Modelos: En almacenamiento local (no encriptados, datacenter securing)
- Logs: Encrypted storage (opcional, costo adicional)

### Firewalls & DDoS

- Whitelist IP si es posible (enterprise customers)
- Rate limiting por API key
- CloudFlare o similar para anti-DDoS básico

---

## DevOps & CI/CD

### Versionado

**Git**
- Repositorio privado (empresa)
- Commits señados
- PR reviews obligatorio

### Testing

- Unit tests (FastAPI, modelos)
- Integration tests (API end-to-end)
- Load tests (simular tráfico)
- Coverage target: >80%

### Deployment

**Staging → Production**
- Blue-green deployment
- Rollback automático si SLA falla
- Canary releases (5% tráfico primero)

### Uptime

**Target:** 99.5% (SLA)
- ~3-4 horas downtime permitidas/año
- Monitoring 24/7 (automated alertas)
- Runbooks para incidents comunes

---

## Gestión de Modelos

### Model Storage

```
/models/
├── llama-70b-hf/
│   ├── config.json
│   ├── model.safetensors (sharded)
│   └── tokenizer.model
└── qwen-32b-hf/
    ├── config.json
    ├── model.safetensors
    └── tokenizer.model
```

**Almacenamiento:** NVMe local (no cloud storage, privacidad)

### Model Serving

- Cargar modelos en VRAM al startup
- Keep-alive de 30 minutos (evitar reload)
- Downtime esperado al agregar modelos: 2-5 min

### Model Updates

- Nuevas versiones: A/B testing en staging primero
- Rollout gradual a 5% → 50% → 100%
- Rollback disponible si hay degradación

---

## Dependencias Principales

| Componente | Versión | Razón |
|-----------|---------|-------|
| Python | 3.11+ | Soporte, performance |
| CUDA | 12.1+ | GPU support |
| cuDNN | 8.9+ | Aceleración |
| PyTorch | 2.1+ | Inferencia |
| Vllm | 0.3+ | Servidor LLM |
| FastAPI | 0.104+ | API |
| Kubernetes | 1.28+ | Orquestación |

**Policy:** Actualizar dependencias cada 3 meses, mantener supported versions solo.

---

## Diagrama de Dependencias

```
User Request (HTTP)
    ↓
FastAPI (API)
    ↓
Vllm (Inference)
    ↓
PyTorch
    ↓
CUDA Runtime
    ↓
NVIDIA GPU
```

---

## Costos de Infraestructura (Año 1)

| Componente | Costo |
|-----------|-------|
| GPU (4x RTX 4090) | €7,200 |
| Servidor host | €2,000 |
| Networking setup | €500 |
| **Hardware Total** | €9,700 |
| | |
| Colocation (12 meses) | €4,500 |
| Electricidad | €3,500 |
| Networking (connectivity) | €500 |
| **Operaciones Total** | €8,500 |
| | |
| **TOTAL** | **€18,200** |

*Nota: Resto del presupuesto (€11,800) para software dev, legal, marketing.*

---

## Documentación Técnica

- **Deployment:** Kubernetes manifests en repo privado
- **API Docs:** OpenAPI 3.0 (auto-generado por FastAPI)
- **Runbooks:** Procedimientos para incidents
- **Architecture Decision Records (ADRs):** Cambios importantes documentados
