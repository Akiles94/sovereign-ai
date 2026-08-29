# Política Financiera

## Principio Fundamental

**No hay secretos.** Cada euro es contable, público, y auditable.

---

## Tesorería

### Cuentas Principales

1. **Open Collective**
   - Depósito público de inversiones
   - Gastos publicados automáticamente
   - Transparencia 100%
   - Comisión: 5% (standard)

2. **Cuenta Bancaria Operacional**
   - Gastos diarios (salarios, hardware, colocation)
   - Reconciliación mensual con Open Collective
   - Signatarios: Founder + 1 Stakeholder (check & balance)

3. **Cuenta de Contingencia**
   - 3-6 meses de costos operativos
   - No disponible para gasto discrecional
   - Sólo en emergencia (servidor incendiarse, etc.)

---

## Ciclo Presupuestario

### Trimestral (Planeación)

**Mes 1 del trimestre:**
1. Proyectar gastos siguientes 3 meses
2. Estimar ingresos (usuarios activos × tokens × pricing)
3. Proponer budget ajustado al Consejo
4. Presentar en Asamblea si hay cambios mayores

**Proceso:**
```
Timeline:
- Día 1: Draft presupuesto presentado
- Días 2-7: Debate en Discord/GitHub
- Días 8-9: Votación (48 horas)
- Día 10: Aprobado + publicado
```

**Rigidez:** Budget aprobado, gastos puntuales (<€500) no requieren aprobación adicional.

### Mensual (Reportes)

**Último día de mes:**
1. Reconciliar Open Collective con banco
2. Compilar report de gastos
3. Proyectar runway (cuántos meses de operación quedan)
4. Publicar en docs/reports/

**Contenido del reporte:**
```markdown
# Reporte Mensual - Agosto 2026

## Ingresos
- Revenue API: €850
- Donations: €100
- **Total:** €950

## Gastos
- Hardware: €0
- Hosting: €375
- Electricidad: €250
- Dev time: €500 (volunteer hours, valued at €150/hr)
- Marketing: €150
- Other: €25
- **Total:** €1,300

## Resultado: -€350 (as expected, Fase 1)

## Métricas
- Usuarios activos: 15
- Tokens procesados: 50M
- Uptime: 99.2%
- Costo por usuario: €86/mes
- Precio promedio: €63/usuario/mes

## Runway
- Dinero en tesorería: €25,000
- Tasa de quema: €350/mes
- Runway: 71 meses (bien posicionado)
```

### Anual (Auditoría)

**Diciembre + Enero:**
1. Auditoría externa (€1,200 budget, required en España)
2. Compilar financial statements
3. Presentar en Asamblea General
4. Vote de aprobación

---

## Distribución de Gastos

### Categoría: Hardware (28% del presupuesto inicial)

| Item | Costo | Justificación |
|------|-------|--------------|
| GPU RTX 4090 (4x) | €7,200 | Capacidad de inferencia |
| Servidor host | €1,300 | CPU, RAM, storage |
| Networking | €500 | Cables, switches |
| **Total** | **€9,000** | |

**Refresh cycle:** 3-4 años (amortización)

### Categoría: Hosting & Infraestructura (15%)

| Item | Costo | Justificación |
|------|-------|--------------|
| Colocation/colocation | €375/mes | Espacio, cooling, connectivity |
| Electricidad | €290/mes | Consumo de GPUs |
| Connectivity redundante | €50/mes | Backup ISP (si Budget lo permite) |
| **Total** | **€715/mes** | |

**Vendor:** Buscar locales en España/EU (cost + privacidad)

### Categoría: Legal & Compliance (7%)

| Item | Costo | Justificación |
|------|-------|--------------|
| Registro asociación | €800 | Una sola vez |
| Auditoría anual | €1,200 | Required (España) |
| Términos de servicio | €500 | Lawyer review |
| GDPR compliance | €300 | Documentation, policies |
| **Total** | **€2,800** | |

**Recurrente:** €1,500/año (audit + legal updates)

### Categoría: Desarrollo (5%)

| Item | Costo | Justificación |
|------|-------|--------------|
| Founder/API Dev | €1,500 (parte-time) | Platform development |
| DevOps contractor | €500 | Kubernetes setup, monitoring |
| QA/Testing | €300 | Manual + automated |
| Misc tools/services | €200 | GitHub Pro, monitoring, etc. |
| **Total** | **€2,500** | |

**Modelo:** Founder (equity + salary pequeño), contractors (hourly)

### Categoría: Marketing & Community (7%)

| Item | Costo | Justificación |
|------|-------|--------------|
| Content creation | €1,000 | Blog, docs, videos |
| Events | €600 | Meetups, conf sponsorships |
| Social media tools | €200 | Buffer, Hootsuite |
| Community manager (part-time) | €200 | Discord, GitHub issues |
| **Total** | **€2,000** | |

### Categoría: Contingencia (26%)

| Item | Costo | Justificación |
|------|-------|--------------|
| Hardware failure | €3,000 | GPU muere, replacement rápido |
| Unexpected colocation cost | €2,000 | Price increase, redundancy |
| Legal emergency | €1,500 | Unforeseen compliance issue |
| Contractor spillover | €1,500 | Si dev toma más tiempo |
| **Total** | **€8,000** | |

---

## Salarios & Compensación

### Política General

1. **Fundador:** Salario pequeño (€500/mes) + equity (50% votante)
   - Justificación: Tiempo full-time equivalente
   - Revisión: Anual o cuando revenue > €2k/mes

2. **Contractors:** €50-150/hora según expertize
   - Pago: Facturas, 30 días máximo

3. **Volunteers:** Opcionales
   - Reconocimiento público
   - Contribuciones valorizadas (disclosed en reporte)

### Raise Criteria

Salario puede aumentar si:
- ✅ Revenue > Gastos (profitabilidad)
- ✅ Consejo aprueba (>50% vote)
- ✅ Transparencia: Aumento es público

Máximo aconsejable: 2x salario inicial antes de Año 3.

---

## Reinversión de Excedentes

Cuando ingresos > gastos operacionales:

```
Excedente = Revenue - Operating Costs

Distribución:
├─ 60% → Reinversión en infraestructura
│  ├─ GPU adicionales
│  ├─ Modelos especializados
│  └─ Tooling de devops
│
├─ 20% → Contingencia/Reserves
│
└─ 20% → Compensación de operadores
   ├─ Salarios
   ├─ Bonuses
   └─ Contratos especiales
```

**Votación:** Comunidad vota distribución anual.

---

## Auditoría & Compliance

### Auditoría Interna (Mensual)

- Reconciliación Open Collective vs Banco
- Review de gastos mayores (>€500)
- Validar documentos soporte

### Auditoría Externa (Anual)

- Firma contable española (requirement legal)
- Costo: ~€1,200
- Publicar conclusiones en GitHub

### Cumplimiento Legal

**España:**
- ✅ Asociación sin ánimo de lucro
- ✅ Registro en Asociaciones Comunitarias
- ✅ Auditoría anual (obligatorio)
- ✅ Declaración de impuestos (cero impuestos si es nonprofit)

**EU:**
- ✅ GDPR: Privacy policy, data handling
- ✅ EU AI Act: Compliance en modelos usados
- ✅ VAT: Aplicable si ingresos > €16,500

---

## Gastos Prohibidos

❌ **No permitidos sin votación explícita:**
- Salarios ejecutivos excesivos
- Marketing agresivo (de-ranking, manipulation)
- Lobby o political donations
- Contribuciones a otros proyectos (sin governance)
- Hardware que no sea para inferencia

---

## Gestión de Dinero

### Segregación de Fondos

| Cuenta | Propósito | Límite de gasto |
|--------|---------|-----------------|
| Open Collective | Inversiones públicas | No límite (votado) |
| Operacional | Gastos diarios | Budget trimestral |
| Contingencia | Emergencias | Solo consejo vota |

### Cheques & Balances

1. Dos firmas para gastos >€5,000
2. Budget pre-aprobado (no sorpresas)
3. Receipts requeridos para todos
4. Transparencia radical

---

## Reporte Trimestral (Ejemplo)

```markdown
# Reporte Q3 2026 - Soberano AI

## Estado Financiero
- Ingresos: €1,725 YTD
- Gastos: €18,200 YTD
- Déficit: -€16,475
- Tesorería restante: €13,525
- Runway: 8.9 meses

## Distribucion de Gastos
- Hardware: 40% (€7,200)
- Hosting: 35% (€6,400)
- Otros: 25% (€4,600)

## Decisiones Tomadas
- Aprobado: GPU extra en Q4 (€2,000 adicional)
- Denegado: Contrato de marketing agresivo (€5k)
- Votado: Salario founder sigue en €500/mes

## Métricas
- Usuarios: 50
- Revenue/usuario: €35/mes
- Costo/usuario: €364/mes (Año 1, esperado)
- Viabilidad: Positiva si llegamos a 100+ usuarios

## Próximos Pasos
- Evaluar segundo fundraising si demand crece
- Audit externo en Enero 2027
- Revisión de pricing en Q4
```

---

## Cómo Acceder a Reportes

- **Open Collective:** https://opencollective.com/sovereign-ai (público)
- **GitHub:** `/docs/reports/` (público)
- **Email:** osvinueza94@gmail.com (Founder)
- **Acceso completo:** Stakeholders + Consejo

---

**Compromiso:** Cada euro es contable. Confianza es nuestra moneda.

**Última actualización:** Agosto 2026
