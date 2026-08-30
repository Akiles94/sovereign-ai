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

### **Founder: Oscar Vinueza**

El founder tiene un estatus especial, distinto a los tiers de inversión, descrito en detalle en la sección **"Protecciones del Founder"** más abajo. Resumen:

- **Voto:** Peso mínimo garantizado del 25% del total (ver detalle abajo)
- **Veto:** En decisiones existenciales (venta a VC, cambio a for-profit, liquidación no autorizada, cambios retroactivos a su compensación)
- **Decisiones reservadas:** Dirección técnica, contratación de equipo, roadmap de producto
- **Asiento permanente en Consejo** (no rotatorio, no requiere reelección)
- **Duración:** Indefinida mientras sea Founder Activo (ver definición abajo)
- **Límite explícito:** Este poder es defensivo — protege la misión de terceros o mayorías circunstanciales. No le permite al founder cambiar los principios fundacionales, convertir el proyecto a for-profit, o venderlo sin aprobación de mayoría de la comunidad (ver "Límites al Poder del Founder" abajo)

---

## Protecciones del Founder (Oscar Vinueza)

Estas protecciones existen para garantizar que el proyecto no pueda ser desviado de su misión original (privacidad, propiedad comunitaria, sostenibilidad) por dilución de voto a medida que crece la comunidad, ni por una mayoría circunstancial que decida cambiar su naturaleza fundamental. Son indefinidas mientras Oscar sea **Founder Activo**.

### 1. Veto en Decisiones Existenciales

El founder puede bloquear unilateralmente, sin necesidad de justificar ante votación:

- Venta o transferencia de la infraestructura/marca a inversores de capital riesgo (VC) u otra entidad con ánimo de lucro
- Conversión de la asociación de nonprofit a entidad con ánimo de lucro
- Liquidación o disolución no autorizada por el proceso formal de `/docs/governance.md`
- Cambios retroactivos a compensación del founder ya aprobada previamente por el Consejo
- Cambios que alteren los principios fundacionales (privacidad por diseño, propiedad comunitaria, transparencia radical)

Este veto **no tiene mecanismo de override** por votación ordinaria ni supermayoría — es la salvaguarda más fuerte del proyecto. La única vía para remover esta protección es si el founder deja de ser **Founder Activo** (ver abajo).

### 2. Porcentaje Mínimo Garantizado de Voto

En toda Asamblea General y votación del Consejo, el voto del founder se calcula así:

```
Peso del founder = MAX(2 votos individuales, 25% del total de votos emitidos)
```

Esto significa que, sin importar cuántos Early Supporters, Founding Members o Stakeholders se sumen, el founder **nunca cae por debajo del 25% del poder de voto total**. Es un porcentaje recalculado dinámicamente en cada votación, no una cantidad fija de votos.

**Ejemplo:**
- Si hay 100 votos de comunidad + founder → founder efectivamente vota 33 puntos (25% de 133 totales), no solo 2
- Si hay 6 votos de comunidad + founder → founder tiene 2 votos (mínimo base), que ya supera 25%

### 3. Decisiones Reservadas al Founder

Ciertas categorías se deciden directamente por el founder, sin pasar por votación comunitaria (aunque se comunican con transparencia al Consejo):

| Categoría | Decide | Comunidad vota |
|-----------|--------|-----------------|
| Dirección técnica / arquitectura | ✅ Founder | ❌ |
| Contratación de equipo técnico/operativo | ✅ Founder | ❌ |
| Roadmap de producto (features, priorización) | ✅ Founder | ❌ |
| Selección de tecnologías | ✅ Founder | ❌ |
| Presupuesto y gastos | ❌ | ✅ Comunidad (ver Proceso Decisorio) |
| Cambios de gobernanza | ❌ | ✅ Comunidad |
| Pricing de la API | ❌ | ✅ Comunidad (con propuesta del founder) |
| Expansión (segundo datacenter, etc.) | ❌ | ✅ Comunidad |

**Razonamiento:** El founder mantiene control ejecutivo sobre "cómo se construye" el producto; la comunidad controla "cómo se gasta el dinero" y "hacia dónde va el proyecto" a nivel estratégico.

### 4. Cláusula de Salida / Fork

Si la Asamblea General vota (incluso por supermayoría) una decisión que el founder considera traiciona la misión fundacional, el founder tiene derecho a:

- **Fork:** Continuar el proyecto de forma independiente bajo nueva entidad, usando el código (ya open source) y la marca alternativa
- **Recompra:** Derecho de primera opción para recomprar el control completo de la infraestructura a valoración justa (tasación independiente), antes de que se ejecute la decisión de la Asamblea

Esto no es un boicot al voto comunitario — la comunidad puede votar lo que considere correcto — pero garantiza que el founder no queda atrapado financiando/operando un proyecto que ya no refleja su visión original.

### Límites al Poder del Founder — Esto es un Escudo, No una Espada

Todas las protecciones anteriores son **defensivas**: existen para impedir que la comunidad, un tercero, o una mayoría circunstancial desvíen el proyecto de su misión. **No existen para que el founder pueda imponer cambios contra los principios fundacionales por su cuenta.**

Explícitamente, el founder **NO puede**, unilateralmente ni combinando su voto mínimo garantizado, su veto o sus decisiones reservadas:

- Cambiar los principios fundacionales del proyecto (privacidad por diseño, propiedad comunitaria, transparencia radical, sostenibilidad — ver `/docs/vision.md`)
- Convertir la asociación a entidad con ánimo de lucro
- Vender o transferir el proyecto a un tercero
- Eliminar o reducir los derechos de voto y gobernanza de la comunidad
- Usar las "decisiones reservadas" (dirección técnica, contratación, roadmap) para introducir de facto cambios que alteren la misión (ej. cerrar el código, dejar de ser privacy-first, centralizar el control)

**Cualquier cambio a los principios fundacionales — lo proponga el founder o la comunidad — requiere aprobación de mayoría de la comunidad en Asamblea General.** El veto del founder solo puede usarse para **bloquear** una propuesta que vaya contra la misión; nunca para **aprobar** unilateralmente una que la cambie. Si el founder intentara ir contra los principios fundacionales, la comunidad conserva su voto y su derecho a oponerse — el 25% mínimo garantizado no alcanza para imponer una decisión de este tipo por sí solo.

### Definición de "Founder Activo"

Estas protecciones aplican **indefinidamente** mientras Oscar sea Founder Activo, definido como:

- Participa en el Consejo Comunitario (asiste o delega explícitamente)
- Responde a comunicaciones críticas en un plazo razonable (~30 días)
- No ha renunciado voluntariamente ni delegado el rol a un sucesor
- No está legalmente incapacitado de forma permanente

Si Oscar deja de cumplir esta definición por un período prolongado (12+ meses sin actividad ni sucesor designado), el Consejo puede iniciar una revisión de estas protecciones — pero **solo por esta causa específica de inactividad**, nunca para diluir el control del founder mientras esté activo.

---

## Proceso Decisorio

> **Nota:** Las decisiones técnicas, de producto y de contratación están reservadas al founder (ver "Protecciones del Founder"). Este proceso decisorio aplica a presupuesto, gastos y gobernanza.

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

| Tier | Votos |
|------|-------|
| Early Supporter | 1 voto |
| Founding Member | 1 voto |
| Stakeholder | 1 voto |
| **Founder (Oscar)** | **MAX(2 votos, 25% del total)** — ver "Protecciones del Founder" |

**Criterio:** El founder mantiene mínimo 25% del poder de voto total, permanentemente, para evitar dilución a medida que crece la comunidad. Detalle completo en la sección "Protecciones del Founder" arriba.

*Nota: El porcentaje mínimo del founder (25%) NO es ajustable por votación ordinaria — ver cláusula de veto en Protecciones del Founder.*

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
