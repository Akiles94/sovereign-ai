# Cumplimiento Normativo

## Regulaciones Aplicables

Sovereign AI opera bajo múltiples marcos regulatorios. Esta página documenta nuestro compliance status.

---

## GDPR (General Data Protection Regulation - EU)

### Aplicabilidad
✅ **Sí aplicable.** Procesamos datos personales de usuarios en EU.

### Requisitos Clave

**1. Privacy Policy**
- ✅ Publicada y accesible
- ✅ Lenguaje claro (no legal-speak)
- ✅ Explica qué datos, por qué, cuánto tiempo

**2. Data Processing Agreement (DPA)**
- ✅ Para clientes B2B (si tienen usuarios finales)
- ✅ Define responsabilidades
- ✅ Cláusula de sub-processors

**3. Data Subject Rights**
- ✅ Acceso (enviar datos en 30 días)
- ✅ Rectificación (corregir datos incorrectos)
- ✅ Eliminación (derecho al olvido)
- ✅ Portabilidad (exportar en formato abierto)
- ✅ Objeción (parar procesamiento)

**4. Data Protection Impact Assessment (DPIA)**
- ✅ Completada para inferencia de IA
- ✅ Identifica riesgos potenciales
- ✅ Documentadas mitigaciones

**5. Breach Notification**
- ✅ Si hay breach: notificar dentro 72 horas
- ✅ Contactar usuarios afectados
- ✅ Reportar a AEPD (regulador español)

**6. Data Retention**
- ✅ Logs: Máximo 90 días
- ✅ Billing info: Máximo 7 años (required para impuestos)
- ✅ No retention de prompts/responses

### Our Implementation

| Requirement | Status | Evidence |
|------------|--------|----------|
| Privacy Policy | ✅ Publicada | docs/privacy-policy.md |
| DPA Template | ✅ Creada | docs/legal/DPA-template.md |
| DPIA | ✅ Completada | Disponible a reguladores |
| Log Retention | ✅ Auto-delete 90d | Infrastructure config |
| User Rights Portal | ⏳ Año 2 | Roadmap |
| Breach Process | ✅ Documentado | docs/incident-response.md |

---

## EU AI Act

### Aplicabilidad
⚠️ **Parcialmente aplicable.** Ley nueva (2026), interpretación en evolución.

### Requisitos Esperados

**Para "High-Risk" AI (posiblemente nosotros):**
- [ ] Disclosure: Informar al usuario que es IA
- [ ] Transparency: Revelar capacidades/limitaciones
- [ ] Human Oversight: Usuario puede rechazar conclusiones
- [ ] Documentation: Mantener registros de decisions
- [ ] Monitoring: Post-deployment monitoring

### Nuestra Postura

| Item | Status | Plan |
|------|--------|------|
| Disclosure | ✅ Sí | "Powered by Llama 70B" en responses |
| Documentation | ⏳ Año 1 | Crear durante Fase 1 |
| Bias Monitoring | ⏳ Año 2 | Auditoría de outputs |
| Appeals Process | ⏳ Año 2 | Permita users contestar decisions |

**Nota:** Monitorearemos actualizaciones regulatorias de cerca. Cambiaremos rápidamente si requerimientos se claran.

---

## ePrivacy Directive (2002/58/EC)

### Aplicabilidad
✅ **Sí aplicable.** Protección de comunicaciones privadas.

### Requisitos

**1. Consentimiento para Cookies**
- Si tenemos website: Cookie banner (Año 1)
- Consentimiento explícito antes de tracking

**2. Comunicación Segura**
- ✅ Encriptación HTTPS obligatoria
- ✅ No interception de datos en tránsito

**3. Datos de Tráfico**
- ✅ Guardar mínimamente
- ✅ Borrar después período retention

### Our Implementation

| Requirement | Status | Evidence |
|------------|--------|----------|
| Secure Comms | ✅ HTTPS TLS 1.3 | API docs |
| Data Minimization | ✅ Solo logs needed | Security docs |
| Retention Limits | ✅ 90 días max | Infra config |
| Cookie Consent | ⏳ Año 1 | Website TODO |

---

## Ley Orgánica de Protección de Datos (LOPDGDD - España)

### Aplicabilidad
✅ **Sí aplicable.** Implementación nacional de GDPR en España.

### Requisitos Añadidos

1. **Delegado de Protección de Datos (DPO)**
   - Pequeñas org: No requerido, pero recomendado
   - Plan: Designar DPO externo (€200-300/mes, Año 1)

2. **Registro de Actividades**
   - Documentar procesamiento de datos
   - Mantenido internamente

3. **Consentimiento Explícito**
   - Para procesamiento beyond necesario
   - (Nosotros: Solo lo necesario para inference)

---

## Leyes de Asociaciones (España)

### Aplicabilidad
✅ **Sí aplicable.** Somos asociación registrada.

### Requisitos

- ✅ Registro en Registro de Asociaciones
- ✅ Governance democratica
- ✅ Transparencia de decisiones
- ✅ Auditoría anual (obligatoria si revenue)
- ✅ Junta general anual

### Our Implementation

| Requirement | Status | Evidence |
|------------|--------|----------|
| Registration | ⏳ Año 1 Mes 1 | Trámite en Registro |
| Governance | ✅ Documentada | docs/governance.md |
| Auditoría | ✅ Planeada | Presupuesto asignado |
| Annual Assembly | ✅ Planeada | Diciembre 2026 |

---

## Compliance Risk Matrix

| Regulación | Risk | Probability | Mitigation | Status |
|-----------|------|-------------|-----------|--------|
| GDPR | High | Medium | Privacy policy, DPA, training | ✅ Año 1 |
| EU AI Act | Medium | High | Documentation, disclosure | ⏳ Año 1 |
| ePrivacy | Low | Low | HTTPS, cookies consent | ⏳ Año 1 |
| LOPDGDD | Medium | Medium | DPO, audit, transparency | ⏳ Año 1 |
| Asociaciones | Low | Low | Governance, assembly | ✅ Año 1 |

---

## Roadmap de Compliance

### Año 1 (2026)

**Mes 1:**
- [ ] Registrar como asociación en España
- [ ] Abrir cuenta bancaria a nombre de asociación
- [ ] Draftar Términos de Servicio

**Mes 2:**
- [ ] Completar Privacy Policy (GDPR)
- [ ] Draftar DPA template
- [ ] Completar DPIA

**Mes 3:**
- [ ] Implementar cookie consent (website)
- [ ] Designar DPO (asesor externo)
- [ ] Training de team en GDPR

**Meses 4-6:**
- [ ] Incorporar cambios en BETA feedback
- [ ] Audit externo de privacidad (optional)

**Meses 7-9:**
- [ ] Publicar documentación compliance en website
- [ ] Enterprise customers: Firmar DPAs

**Meses 10-12:**
- [ ] Auditoría anual (requerida)
- [ ] Cumplimiento EU AI Act (si requerimientos claros)
- [ ] Plan Año 2

### Año 2 (2027)

- [ ] ISO 27001 certification (ambitious)
- [ ] SOC 2 Type II audit
- [ ] Bias monitoring para modelos
- [ ] Cumplimiento completo EU AI Act

### Año 3+ (2028+)

- [ ] Certificación internacional (si necesaria)
- [ ] Expansión a otros países (más compliance)
- [ ] Posible federación de datacenters

---

## Recursos de Cumplimiento

### Documentos Internos

- `docs/legal/privacy-policy.md` - Privacy Policy completa
- `docs/legal/DPA-template.md` - Data Processing Agreement
- `docs/legal/DPIA.md` - Data Protection Impact Assessment
- `docs/incident-response.md` - Incident response plan
- `docs/governance.md` - Governance documentation

### Recursos Externos

- [GDPR.eu](https://gdpr.eu/) - Guía completa GDPR
- [AEPD](https://www.aepd.es/) - Autoridad española de protección de datos
- [EU AI Act Compliance](https://ec.europa.eu/info/law/law-topic/artificial-intelligence_en) - EU AI Act
- [ENISA](https://www.enisa.europa.eu/) - Ciberseguridad EU

### Asesoramiento Legal

- Gestoría local: €150-200/mes
- Abogado specialista privacy: €150-250/hora
- DPO externo: €200-300/mes

---

## Contacto de Compliance

**Data Protection Officer (TBD - Año 1):**
- Email: dpo@sovereign-ai.com (cuando sea)

**Reportar violations:**
- Email: compliance@sovereign-ai.com (cuando sea)

**Preguntas sobre GDPR/compliance:**
- Email: osvinueza94@gmail.com

---

## Statements de Compliance

### GDPR
*"Sovereign AI está comprometida con el cumplimiento total del GDPR. Tus datos se procesan solo para proporcionar nuestro servicio, nunca se comparten con terceros, y tienes pleno derecho a acceder, rectificar, o eliminar tus datos en cualquier momento."*

### EU AI Act
*"Reconocemos que operamos tecnología de IA. Somos transparentes sobre capacidades y limitaciones. Los usuarios pueden rechazar conclusiones basadas en IA y solicitar revisión humana."*

### Transparencia
*"Nuestra infraestructura es auditada regularmente. Financias son públicas. Decisiones se toman democráticamente. Confianza es nuestro fundamento."*

---

**Última actualización:** Agosto 2026
**Próxima revisión:** Octubre 2026 (post-launch)
