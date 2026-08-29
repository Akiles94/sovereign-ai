# Seguridad y Privacidad

## Promesa Principal

**Tus datos nunca salen de nuestro datacenter.**

---

## Seguridad por Capas

### Capa 1: Red

**Conexiones HTTP/HTTPS**
- ✅ HTTPS obligatorio
- ✅ TLS 1.3 (encriptación moderna)
- ✅ Ciphers fuertes (no legacy support)
- ✅ HSTS enabled (forcing HTTPS)

**Firewall**
- ✅ Default-deny (whitelist only)
- ✅ Rate limiting por IP/API key
- ✅ DDoS mitigation (CloudFlare optional)

### Capa 2: Autenticación

**API Keys**
- ✅ 32+ character random tokens
- ✅ Hashed en base de datos (bcrypt)
- ✅ Expiración después de 1 año (usuario puede regenerar)
- ✅ Revocación inmediata

**No soportamos:**
- ❌ Basic auth (password)
- ❌ OAuth (por ahora, complexity)
- ❌ Session-based (stateless preferred)

### Capa 3: Datos en Tránsito

**Encriptación de requests:**
```
Client: POST /api/v1/completions (HTTPS/TLS 1.3)
├─ Headers: Authorization: Bearer sk-xxxxx
├─ Body (encriptado en tránsito):
│  {"prompt": "...", "max_tokens": 100}
│
Server: Recibe, desencripta en memoria RAM
└─ Nunca se escribe a disco
```

### Capa 4: Procesamiento

**GPU Processing**
- ✅ Input loaded en VRAM solo
- ✅ Procesamiento en paralelo (no sequential logging)
- ✅ Output generado en VRAM
- ✅ Nunca write a disk durante processing

**Ejemplo seguro:**
```
Input:  "What's my credit card?" → en VRAM
Process: Llama model generate response → en VRAM
Output: "I don't have that info" → en VRAM
Return: HTTPS send to user, clear VRAM
```

### Capa 5: Logging

**Qué registramos:**
```
✅ User ID (hashed)
✅ Timestamp
✅ Tokens consumed
✅ Response time
❌ NO: Prompt content
❌ NO: Response content
❌ NO: IP address (salvo security incident)
```

**Almacenamiento:**
- ✅ Encrypted logs en SSD local
- ✅ No sync a cloud
- ✅ Rotación automática (90 días max)
- ✅ Borrar después de período de retención

---

## Privacidad por Diseño

### GDPR Compliance

**Derechos del usuario:**

1. **Right to Access**
   - Usuario puede pedir: "Qué datos tienes de mí?"
   - Respondemos en 30 días con reportde completo

2. **Right to Deletion**
   - Usuario pide: "Borra todos mis datos"
   - Borramos logs en 24 horas
   - PERO: Datos en Open Collective (transaction history) pueden no borrarse (audit trail)

3. **Right to Data Portability**
   - Usuario pide: "Dame mis datos en formato X"
   - Exportamos en JSON/CSV

4. **Right to Object**
   - Usuario pide: "No proceses mis datos"
   - Bloqueamos API key, eliminamos logs

### No Tracking

❌ **Lo que NO hacemos:**
- No retentamos prompts después de processing
- No re-usamos datos para entrenar nuevos modelos
- No vendemos data a terceros
- No compartimos con Google Analytics / Facebook
- No hay cookies de tracking

✅ **Lo que SÍ hacemos:**
- Logs agregados: "En el mes X consumieron 5B tokens" (sin detalles de usuario)
- Uptime monitoring (necesario para operaciones)
- Security logs (accesos fallidos, rate limit hits)

---

## Vulnerabilidades Conocidas & Mitigaciones

### Riesgo 1: GPU Memory Leaks

**Escenario:** Prompt X no se borra de VRAM, request Y lo accesa

**Mitigación:**
- ✅ VRAM clearing entre requests (explícito)
- ✅ Testing: Memory leak tests en CI
- ✅ Monitoring: VRAM usage alerts

### Riesgo 2: Inference Timing Attacks

**Escenario:** Podría deducir información del tiempo de respuesta

**Mitigación:**
- ✅ Padding: Response times incluyen deliberate jitter
- ✅ Batching: Procesar múltiples requests en paralelo (timing opaco)

### Riesgo 3: Model Extraction

**Escenario:** Alguien intenta robar el modelo via many requests

**Mitigación:**
- ✅ Rate limiting: Max tokens/día por usuario
- ✅ Pricing: Caro hacer esto ($$$)
- ✅ Monitoring: Detección de patterns extractivos

### Riesgo 4: Supply Chain (Dependencies)

**Escenario:** Librería que usamos (PyTorch, etc.) tiene backdoor

**Mitigación:**
- ✅ Dependency pinning: Versiones específicas
- ✅ Regular audits: Scanear dependencias con tools (safety, pip-audit)
- ✅ Minimal dependencies: Solo lo necesario
- ✅ Open source: Comunidad puede auditar

### Riesgo 5: Insider Threat

**Escenario:** Admin o developer roba datos/código

**Mitigación:**
- ✅ Logging: Todos los accesos logeados
- ✅ Principle of least privilege: Acceso mínimo necesario
- ✅ Code review: Cambios revisados
- ✅ Transparency: Community audit access

---

## Respuesta a Incidentes

### Incident Response Plan

**Cuando ocurre problema (ej: posible data leak):**

1. **Immediate (0-1 hora)**
   - Aislar sistema afectado
   - Notificar a Consejo
   - Comenzar investigación

2. **24 horas**
   - Determinar scope ("¿Cuántos usuarios afectados?")
   - Contactar usuarios afectados
   - Publicar statement en GitHub
   - Contactar AEPD (regulador español)

3. **72 horas (requirement GDPR)**
   - Reporte formal a AEPD
   - Plan de remediación publicado

4. **30 días**
   - Root cause analysis
   - Preventive measures implementadas
   - Audit externo de seguridad

---

## Auditoría

### Auditoría Anual (Obligatoria)

- Auditor externo (empresa tercera)
- Costo: ~€2,000
- Scope: Financias + seguridad básica

### Auditoría de Seguridad (Año 2+)

- Penetration testing profesional
- Bug bounty program (si budget permite)
- Security review de código (cambios PRs)

### Community Audit

- Código open source (GitHub)
- Cualquiera puede reportar issues
- Bounty program: €50-500 por vulnerability reportada responsiblemente

---

## Certifications & Compliance

### En Progress

- [ ] ISO 27001 (Information Security Management) - Año 2
- [ ] SOC 2 Type II - Año 3
- [ ] GDPR Accountability - Año 1
- [ ] HITRUST (si tenemos healthcare customers) - Año 2

### No Certification (Por ahora)

- ❌ PCI DSS: No procesamos tarjetas de crédito
- ❌ HIPAA: No datos médicos directos (pero friendly a healthcare use)

---

## Seguridad de Infraestructura Física

### Datacenter Security

**Ubicación:** Colocation facility en España (TBD específico)

**Controles Físicos:**
- ✅ 24/7 surveillance (CCTV)
- ✅ Biometric access (card + fingerprint)
- ✅ Environmental controls (temperature, humidity)
- ✅ Power redundancy (dual PSU, UPS, generator)
- ✅ Fire suppression (automated sprinkler)

### Hardware Lifecycle

**Decommissioning:**
- ✅ Full disk wipe (DBAN) when replacing
- ✅ Destruction de discos with classified data
- ✅ Recycling via certified e-waste provider

---

## Mejores Prácticas de Seguridad

### Development

- ✅ Code review obligatoria (2 eyes principle)
- ✅ Branch protection (no push directo a main)
- ✅ Commits signed (git signature)
- ✅ Secrets management (no hardcoded passwords)

### Operations

- ✅ Least privilege access (users have minimal needed)
- ✅ SSH keys (not password login)
- ✅ VPN para acceso sensitivo
- ✅ MFA (multi-factor auth) para admin
- ✅ Logs centralizados y audited

### Deployment

- ✅ Automated testing (security tests included)
- ✅ Staging environment (test before production)
- ✅ Canary deployments (5% traffic first)
- ✅ Rollback capability (revert quickly if issues)

---

## Transparencia de Seguridad

### What's Public

✅ Arquitectura general (este documento)
✅ Responsabilidades de seguridad
✅ Incident disclosures (después de fix)
✅ Roadmap de mejoras

### What's Private

❌ Detalles específicos de infraestructura (security via obscurity)
❌ Zero-day vulnerabilities (hasta fix)
❌ Staff credentials / access controls
❌ Datos de seguridad de usuarios individuales

---

## Expectaciones de Usuario

### Si eres usuario

**Responsabilidades tuyas:**
- ✅ Guardar tu API key segura (como password)
- ✅ Regenerar key si la comprometes
- ✅ No compartir key en código público
- ✅ Validar HTTPS (verifica certificado)

**Nuestras responsabilidades:**
- ✅ Mantener infraestructura segura
- ✅ Responder a vulnerabilidades rápidamente
- ✅ Transparencia en incidents
- ✅ No compartir ni vender datos

---

## Reportar Vulnerabilidades

**Si encuentras un security issue:**

1. **NO publiques públicamente**
2. **Email:** security@sovereign-ai.com (cuando exista)
3. **Incluye:**
   - Descripción del vulnerability
   - Pasos a reproducir
   - Impacto potencial
   - Tu nombre/contacto

4. **Respuesta:**
   - Acknowledgment: 24 horas
   - Fix: 1-2 semanas (depende de severity)
   - Disclosure: 30 días después de fix publicado

**Bounty:**
- Low (linting issues): €50
- Medium (info disclosure): €200
- High (data leak potential): €500
- Critical (remote execution): €1,000+

---

## Conclusión

No somos impenetrables. Pero trabajamos duro para:

1. ✅ **Privacidad:** Datos nunca salen
2. ✅ **Transparencia:** Puedes auditar
3. ✅ **Responsabilidad:** Reportamos incidents
4. ✅ **Mejora continua:** Aprendemos de errores

**Tu privacidad es nuestra prioridad.**

---

**Última actualización:** Agosto 2026
**Próxima revisión:** Octubre 2026
