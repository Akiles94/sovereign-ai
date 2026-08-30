# Gobernanza Comunitaria

## Principios Fundamentales

1. **Transparencia radical:** Todas las decisiones y financias son públicas
2. **Democracia participativa:** 1 inversor = 1 voto (ponderado por inversión en tiers)
3. **Meritocracia:** Contribuciones valoradas, no títulos
4. **Sostenibilidad:** Decisiones se toman pensando en largo plazo
5. **Auditoría comunitaria:** Código es open source, financias son auditadas

---

## Estructura Organizativa

```
COMUNIDAD DE INVERSORES
        │
        ├─ Asamblea General (Annual Vote)
        │  └─ Decisiones mayores (scaling, pivots)
        │
        ├─ CONSEJO COMUNITARIO (Trimestral)
        │  ├─ 1 Founder/Admin
        │  ├─ 2-3 Inversores Principales (Stakeholders)
        │  ├─ 1-2 Miembros Técnicos
        │  └─ 1 Community Manager
        │
        ├─ WORKING GROUPS (Ongoing)
        │  ├─ Infraestructura & Ops
        │  ├─ Producto & API
        │  ├─ Comunidad & Marketing
        │  └─ Legal & Compliance
        │
        └─ OPERACIONES (Daily)
           ├─ DevOps / SRE
           ├─ Backend Engineers
           └─ Customer Support
```

---

## Niveles de Inversión y Derechos de Voto

### **Tier 1: Early Supporter (€25-€500)**
- **Cantidad:** Unlimited
- **Derechos:**
  - Nombre en contributor list
  - Descuento lifetime en API (10%)
  - Acceso a Discord comunitario
  - **Voto:** 1 voto en asamblea general

### **Tier 2: Founding Member (€500-€2,000)**
- **Cantidad:** Max 50
- **Derechos:**
  - Todos de Tier 1
  - Voz en decisiones mensuales (survey)
  - Prioridad en nuevas features
  - Acceso a board calls trimestrales
  - **Voto:** 1 voto + voz en decisiones (decisiones <= €5k)

### **Tier 3: Stakeholder (€2,000+)**
- **Cantidad:** Max 10
- **Derechos:**
  - Todos de Tier 2
  - **Asiento en Consejo Comunitario**
  - Veto en decisiones > €10k (raramente)
  - Acceso a financias detalladas
  - Fine-tuning gratuito 1x/año
  - **Voto:** 1 voto + participación activa en consejo

### **Founder: Oscar Viñueza**
- **Derechos especiales:**
  - Propuesta de decisiones (sin veto)
  - **Voto ponderado:** 2 votos (double-weight en decisiones)
  - Asiento permanente en Consejo (no rotatorio)
  - Responsabilidad ejecutiva
- **Razonamiento:** Iniciador del proyecto, full-time commitment, responsabilidad operativa

---

## Proceso Decisorio

### **Decisiones Menores** (<€1k de impacto)
- **Quién:** Founder + Working group relevante
- **Aprobación:** Rápida (24-48 horas)
- **Notificación:** Discord announcement

### **Decisiones Medias** (€1k-€10k de impacto)
- **Quién:** Consejo Comunitario
- **Aprobación:** Votación simple (> 50%)
- **Duración:** 1 semana de debate, votación
- **Transparencia:** Publicado en GitHub issues

### **Decisiones Mayores** (>€10k o cambios fundamentales)
- **Quién:** Asamblea General (todos los inversores)
- **Aprobación:** Mayoría simple (> 50%)
- **Duración:** 2 semanas de debate, votación
- **Ejemplos:**
  - Escalar a segundo datacenter
  - Cambiar modelo de ingresos
  - Cambios en estructura legal
  - Liquidación (si es necesaria)

---

## Consejo Comunitario (Trimestral)

### Composición
- **Founder/Admin:** 1 (ex officio, no votante)
- **Inversores Stakeholder:** 2-3
- **Miembro técnico:** Ingeniero principal o elegido
- **Community manager:** Elegido por comunidad

### Responsabilidades
1. **Supervisión financiera**
   - Revisar gastos mensuales
   - Aprobar presupuestos trimestrales
   - Auditoría de Open Collective

2. **Dirección técnica**
   - Priorizar features
   - Monitorear SLAs
   - Aprobar cambios de arquitectura

3. **Comunidad & Outreach**
   - Aprobar iniciativas de marketing
   - Revisar contribuciones externas
   - Moderar conflictos

4. **Escalada**
   - Cualquier decisión controversial sube a Asamblea

### Reuniones
- **Frecuencia:** Cada 3 meses (ajustable si hay crisis)
- **Duración:** 1.5-2 horas
- **Acceso:** Público (puede haber sesión privada de 30 min)
- **Actas:** Publicadas dentro de 48 horas

---

## Proceso de Votación

### Votación por Encuesta (Decisiones menores)
```
1. Propuesta presentada en Discord
2. 3-5 días de debate
3. Votación en Typeform o GitHub
4. Resultado anunciado
5. Implementación si aprobado (>50% + consensus)
```

### Votación Formal (Decisiones mayores)
```
1. RFC (Request for Comments) publicado en GitHub
2. 1 semana de debate en issues/Discord
3. Draft final refinado
4. Votación en Open Collective o sistema seguro
5. Escrow de fondos si es inversión de capital
6. Implementación
```

### Sistema de Pesos de Votación

| Tier | Votos | Peso | Ejemplo |
|------|-------|------|---------|
| Early Supporter | 1 voto | 1x | 1 voto = 1 punto |
| Founding Member | 1 voto | 1x | 1 voto = 1 punto |
| Stakeholder | 1 voto | 1x | 1 voto = 1 punto |
| **Founder (Oscar)** | **1 voto** | **2x** | **1 voto = 2 puntos** |

**Criterio:** El founder tiene doble peso debido a:
- Iniciativa y responsabilidad ejecutiva
- Full-time commitment desde inicio
- Responsabilidad operativa del proyecto
- Experiencia técnica y vision

*Nota: Sistema flexible, puede ajustarse en Asamblea General si comunidad lo vota.*

---

## Working Groups

### 1. **Infraestructura & Ops**
- **Líderes:** DevOps engineer(s)
- **Responsabilidades:**
  - Hardware procurement
  - Uptime > 99%
  - Disaster recovery
  - Costos de colocation
- **Reuniones:** Semanal (technical)

### 2. **Producto & API**
- **Líderes:** Ingeniero principal
- **Responsabilidades:**
  - Roadmap de features
  - Calidad de modelos
  - Performance
  - SDK/integrations
- **Reuniones:** Semanal

### 3. **Comunidad & Marketing**
- **Líderes:** Community manager
- **Responsabilidades:**
  - Onboarding de usuarios
  - Eventos
  - Content marketing
  - Social media
- **Reuniones:** Bi-weekly

### 4. **Legal & Compliance**
- **Líderes:** Advisor (probablemente externo)
- **Responsabilidades:**
  - GDPR compliance
  - EU AI Act
  - Términos de servicio
  - Auditoría legal
- **Reuniones:** Monthly o as needed

### 5. **Frontend & Apps**
- **Líderes:** UX/Frontend engineer (cuando se contrate)
- **Responsabilidades:**
  - Dashboard de usuario
  - Mobile apps (futura)
  - UX/UI design
  - Client SDKs
  - Documentación de usuario
- **Reuniones:** Bi-weekly (cuando hay development)

---

## Asamblea General Anual

### Objetivo
Tomar decisiones transformacionales sobre el futuro del proyecto.

### Agenda típica
1. Reporte anual (financias, usuarios, tecnología)
2. Election de consejo (si aplica)
3. Votación: ¿Continuar? ¿Escalar? ¿Pivotar?
4. Budget aprobación para siguiente año
5. Q&A

### Timing
- **Mes:** Diciembre (Año 1) o según sea necesario
- **Duración:** 1-2 horas
- **Formato:** Video call + transcript público

### Quórum
- Mínimo 50% de inversores o mayoría de Stakeholders

---

## Conflictos de Interés

### Política

1. **Declaración:** Cualquier consejero con conflicto debe declararlo antes de votación
2. **Recusación:** No votan en decisiones donde tienen interés personal
3. **Transparencia:** El conflicto es público
4. **Rotación:** Si hay demasiados conflictos en consejo, se rota membresía

### Ejemplos
- Founder votando su propio salario → recusarse
- Inversor votando sobre competitors de su empresa → recusarse
- Engineer votando framework favorito → OK si es técnicamente justificado

---

## Code of Conduct

Esperamos:
- ✅ Respeto mutuo
- ✅ Comunicación honesta
- ✅ Debate orientado a hechos
- ✅ Privacidad (no revelar información sensible)
- ❌ No harassment, discrimination
- ❌ No spam o coordinación maliciosa
- ❌ No attempts de capture/hijacking

**Violaciones:** Advertencia (primera), bans de Discord/voting (después)

---

## Evolución de Gobernanza

### Año 1 (Actual)
- Founder-led
- Consejo informal de advisors
- Votaciones ad-hoc

### Año 2
- Consejo formalizado
- Votaciones regulares
- Working groups documentados
- Posible incorporación de blockchain voting

### Año 3+
- Posible DAO (Decentralized Autonomous Organization)
- Smart contracts para tesorería
- Votación fully on-chain (si comunidad lo elige)

---

## Transparencia Radical

### Qué es público

✅ **Financias:** Open Collective con detalles
✅ **Decisiones:** Todas las votaciones + resultados
✅ **Roadmap:** Pública, actualizada trimestralmente
✅ **Métricas:** Users, tokens, uptime, incidents
✅ **Actas:** Reuniones de consejo (excepto info sensible)
✅ **Código:** Repositorio público (con privates si es necesario)

### Qué es privado

❌ **Datos de usuarios:** Completamente privado
❌ **Security vulnerabilities:** Hasta fix
❌ **Conflictos personales:** Resoltos en privado
❌ **Estrategia competitiva:** Limitada discusión

---

## Salida / Liquidación (Escenario Pesimista)

Si el proyecto falla o comunidad vota shutdown:

1. **Avisado:** Notificación pública con 3 meses anticipación
2. **Liquidación orderly:** Vender hardware, cerrar deudas
3. **Excedentes:** Retornados proporcional a inversión
4. **Código:** Permanece open source
5. **Datos:** Usuarios eliminados conforme GDPR

**Fondo de resistencia:** 3-6 meses de costos guardados para liquidación ordenada.

---

## Cómo Participar

1. **Inversor:** Contribuye €25+ en Open Collective
2. **Contributor:** Submitir PRs en GitHub
3. **Community:** Join Discord, participa en debates
4. **Advisor:** Propón expertise en working group

**Todos son bienvenidos.**

---

**Última actualización:** Agosto 2026
**Próxima revisión:** Octubre 2026 (después de Asamblea General)
