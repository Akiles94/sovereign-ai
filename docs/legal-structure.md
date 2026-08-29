# Estructura Legal

## Entidad Jurídica

### Asociación Sin Ánimo de Lucro (Cooperativa Comunitaria)

**Tipo:** Asociación Comunitaria de Tecnología
**Jurisdicción:** España (probablemente Madrid o Barcelona)
**Registro:** Asociaciones Comunitarias [TBD número]

### Por qué Asociación (no S.L. / Empresa)?

| Aspecto | Asociación | S.L. Convencional |
|--------|-----------|------------------|
| Estructura | Democrática | Accionistas |
| Impuestos | 0% si nonprofit | 19-25% |
| Governance | Votación | Board |
| Transparencia | Obligatoria | Privada |
| Escalabilidad | Difícil | Fácil |
| VC-friendliness | Baja | Alta |

**Decisión:** Asociación = alineado con misión de propiedad comunitaria

---

## Estatutos (Resumen)

### Artículo 1: Propósito
Sovereign AI es una asociación cuyo objeto es:
1. Desarrollar y operar infraestructura de IA privada
2. Garantizar privacidad de datos de usuarios
3. Democratizar acceso a IA de calidad
4. Promover soberanía tecnológica en EU

### Artículo 2: Membresía

**Quién puede ser miembro:**
- Inversores (Early Supporter, Founding Member, Stakeholder)
- Contribuidores técnicos (con aprobación)
- Aliados institucionales (universidades, ONGs)

**Derechos:**
- Tier 1: 1 voto
- Tier 2: 1 voto + participación
- Tier 3: 1 voto + asiento en consejo

**Obligaciones:**
- Respetar code of conduct
- Pagar dues (si aplica, TBD)

### Artículo 3: Asamblea General

Reunión anual en la que se vota:
- Dirección futura del proyecto
- Presupuesto para siguiente año
- Cambios en governance
- Elección de consejo (si aplica)

Quórum: 50% de miembros o mayoría de Stakeholders

### Artículo 4: Consejo Comunitario

Junta trimestral que supervisa:
- Financias
- Operaciones técnicas
- Decisiones >€5k

Miembros: Founder + 2-3 Stakeholders

### Artículo 5: Tesorería

- Abrir cuenta bancaria a nombre de asociación
- Auditoría anual (obligatorio en España)
- Transparencia: Open Collective
- Sin distribución de beneficios (reinversión)

### Artículo 6: Código de Conducta

Miembros acuerdan:
- Transparencia
- Respeto mutuo
- Confidencialidad (datos sensibles)
- No harassment/discrimination

---

## Documentos Legales Requeridos

### España (Requerido para Asociación)

1. **Acta de Constitución**
   - Firmada por 3+ fundadores
   - Notarizada
   - Costo: ~€400

2. **Estatutos**
   - Documento de governance de 10-15 páginas
   - Votado en asamblea constitutiva
   - Registrado en Registro de Asociaciones
   - Costo: €200 (gestoría)

3. **Registro en Hacienda**
   - Solicitar NIF para asociación
   - Declaración anual (incluso si revenue = 0)
   - Costo: Gratis (online)

4. **Póliza de Responsabilidad Civil**
   - Seguro obligatorio para gestionar datos
   - Costo: ~€500/año

### Documentos de Operación

1. **Términos de Servicio (TOS)**
   - Derechos/obligaciones de usuarios
   - Disclaimer de privacidad
   - Términos de pricing
   - Costo: €300-500 (lawyer review)

2. **Política de Privacidad (GDPR)**
   - Qué datos procesamos
   - Cómo los procesamos
   - Derechos del usuario
   - Costo: €200-300 (lawyer review)

3. **Data Processing Agreement (DPA)**
   - Para clientes enterprise
   - Requerido si ellos tienen usuarios finales
   - Costo: €500-1000 (lawyer review)

4. **Acuerdo de Contribuidor**
   - Si aceptamos pull requests
   - IP ownership
   - Costo: Free (template)

---

## Regulaciones Aplicables

### EU

**GDPR (General Data Protection Regulation)**
- ✅ Aplica: Procesamos datos de usuarios
- Requerimientos:
  - Privacy policy
  - Right to deletion (30 días)
  - Data breach notification (72 horas)
  - Annual audit

**EU AI Act**
- ✅ Aplica: Operamos LLMs
- Requerimientos (TBD, regulación nueva):
  - Disclosure que es IA
  - Monitoring de sesgo
  - Compliance documentation

**ePrivacy Directive**
- ✅ Aplica: Almacenamos logs
- Requerimientos:
  - Encriptación
  - Consentimiento de cookies (si website)

### España

**Ley de Asociaciones**
- ✅ Aplica: Somos asociación formal
- Requerimientos:
  - Registro en Registro de Asociaciones
  - Junta directiva
  - Actas de asambleas

**Ley de Protección de Datos**
- ✅ Aplica: Implementa GDPR localmente
- Requerimientos: Similar a GDPR

**Ley de Sociedades Cooperativas** (alternativa)
- Podemos ser cooperativa en lugar de asociación
- Más flexible para monetización
- Similar governance

---

## Impuestos

### Impuesto sobre Sociedades

**Si somos nonprofit:**
- ✅ Exención: 0% ISS
- Requerimiento: Demostrar no lucratividad
- Anualmente: Declarar a Hacienda

**Si fuéramos S.L.:**
- ❌ 19-25% ISS
- Overhead significativo

### IVA

**Situación actual:**
- Si revenue < €16,500/año: Sin IVA
- Si revenue > €16,500/año: IVA 21%

**Estrategia:** Posiblemente estaremos por debajo en Año 1-2.

### Impuestos de Trabajadores

Si pagamos salarios a founder/contractors:
- Retención IRPF (21% aprox)
- SS contributions (~30% employer)

---

## Propiedad Intelectual

### Código

**Licencia de Software:**
- Opción A: GNU Affero GPL v3 (copyleft)
- Opción B: Apache 2.0 (permissive)
- Opción C: MIT (permissive)

**Recomendación:** Apache 2.0 o AGPL (consultar con comunidad)

### Modelos

**Propiedad de Modelos:**
- Llama, Qwen: Meta/Alibaba (nosotros solo usamos)
- Fine-tuned versions: Propiedad comunitaria
- Derivatives: Open source (mismo % que base)

### Datos de Usuarios

**Propiedad:**
- Datos input: Usuario
- Datos output: Usuario
- Logs de uso: Sovereign AI (borrados cada 90 días)

---

## Cambios Legales Esperados

### Año 1
- [ ] Registro como asociación (Mes 1-2)
- [ ] Abrir cuenta bancaria (Mes 1)
- [ ] Contratar gestoría para compliance (Mes 1)
- [ ] Draftar TOS / Privacy Policy (Mes 2-3)
- [ ] Auditoría anual (Diciembre 2026)

### Año 2
- [ ] Posible conversión a cooperativa (si crece)
- [ ] Registro como data processor con autoridades EU
- [ ] Expansión a segundo país (posible)

### Año 3+
- [ ] Posible federación de datacenters (multi-país)
- [ ] Estructura legal más compleja

---

## Abogados & Asesoría

### Recomendado

1. **Gestoría local (España)**
   - Costo: €100-200/mes
   - Responsabilidades:
     - Compliance fiscal
     - Papeleo de Hacienda
     - Auditoría coordinada

2. **Abogado especializado en tech/privacy**
   - Costo: €150-250/hora
   - Necesario para:
     - Revisar TOS
     - Cumplimiento GDPR
     - Contratos enterprise

3. **Asesor de data protection**
   - Costo: €80-150/hora
   - Necesario para:
     - Data Protection Impact Assessment
     - Compliance con regulaciones
     - Incident response

### Budget Recomendado (Año 1)

```
Gestoría: €2,000
Abogado: €500
DPA advisor: €300
────────────────
Total: ~€2,800
```

---

## Mitigación de Riesgos Legales

| Riesgo | Probabilidad | Mitigación |
|--------|------------|-----------|
| Violación GDPR sin querer | Media | DPA clear, privacy policy, training |
| Violación EU AI Act | Baja | Monitorear, actualizar policies |
| Liability de datos | Baja | Seguro de responsabilidad civil |
| Cambio regulatorio | Media | Flexibilidad en estatutos, comité legal |
| Dispute entre miembros | Baja | Code of conduct, arbitration clause |

---

## Documentos Públicos

**Disponibles en `/docs/legal/`:**
- Estatutos aprobados
- TOS
- Privacy policy
- DPA template

**Privados (disponibles a Stakeholders):**
- Reportes de auditoría
- Asuntos legales sensibles

---

**Última actualización:** Agosto 2026
**Próxima revisión:** Octubre 2026 (post-setup)
