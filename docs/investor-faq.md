# FAQ para Inversores

## Sobre el Proyecto

### P: ¿Qué es Sovereign AI?
**R:** Una infraestructura comunitaria de IA privada que devuelve el control de tus datos. Ejecutamos modelos abiertos (Llama, Qwen) en nuestro propio datacenter. No enviamos tus datos a OpenAI, Anthropic o nadie más.

### P: ¿Por qué ahora?
**R:** Convergencia de 3 factores:
1. **Regulación:** EU AI Act (activo agosto 2026) impulsa demanda de privacidad
2. **Tecnología:** Modelos abiertos alcanzan paridad con OpenAI/Anthropic
3. **Conciencia:** Escándalos de retención de datos en proveedores centralizados

### P: ¿Quién lo está haciendo?
**R:** Oscar Viñueza (founder), con ayuda de la comunidad. Startup side-project (full-time day job también).

---

## Sobre la Inversión

### P: ¿Cuánto debo invertir?
**R:** Mínimo €25 (Early Supporter). No hay máximo, pero diferencia de beneficios:
- €25-€500: Early Supporter (descuento 10%)
- €500-€2,000: Founding Member (descuento 15%, voz en decisiones)
- €2,000+: Stakeholder (descuento 25%, asiento en consejo)

### P: ¿Es una inversión o donación?
**R:** Legalmente es **donación** a una asociación sin ánimo de lucro. NO obtendrás equity/acciones.

**Lo que SÍ obtendrás:**
- Descuentos permanentes en API
- Participación en gobernanza
- Transparencia total en cómo se gasta dinero

**Por qué no equity:**
- Queremos evitar VC dynamics (maximizar ROI → comprometer privacidad)
- Queremos propiedad comunitaria, no accionistas
- Modelo sostenible es más importante que exit masivo

### P: ¿Puedo recuperar mi dinero?
**R:** No. Es una donación. PERO:
- Si no usas la API durante 30 días, ofrecemos refund 100%
- Si proyectocrece exitosamente, tu descuento permanente vale mucho

**ROI esperado (si eres usuario):**
```
Si inviertes €500 (Founding Member):
- Descuento 15% = Ahorras €0.23 por millón tokens
- Si consumes 5,000M tokens/año = Ahorras €1,150/año
- Break-even: ~5 meses de uso intenso
```

### P: ¿Hay tax deduction?
**R:** En España, donaciones a asociaciones sin ánimo de lucro pueden ser deductibles (~15-20% en taxas). Requiere consultar con asesor fiscal local. Nosotros emitiremos certificado de donación.

---

## Sobre el Modelo de Negocio

### P: ¿Cómo ganan dinero?
**R:** Pay-per-use (same as OpenAI):
- Usuarios pagan por tokens consumidos
- Precio: €1-2 por millón tokens (vs. $3-10 en OpenAI)
- Nosotros usamos eso para pagar costos

### P: ¿Pero dijeron que es nonprofit?
**R:** Sí, modelo nonprofit opera así:
```
Ingresos - Costos = Excedente

Excedente se distribuye así:
├─ 60% → Mejoras de infraestructura (más GPUs, modelos)
├─ 20% → Contingencia/Reserves
└─ 20% → Salarios de operadores + bonuses
```

No hay profit-taking, no hay shareholders que demanden return, no hay presión de VC.

### P: ¿Cuál es el modelo de exit/IPO?
**R:** No hay. No es el objetivo. La meta es ser autosustentable indefinidamente.

**Si la empresa "sale bien":**
- Seguiremos siendo nonprofit
- Posiblemente escalamos a red federada de datacenters comunitarios
- Comunidad sigue controlando

**Si falla:**
- Dinero restante se devuelve proporcional a inversiones
- Código permanece open source
- Datos de usuarios se borran (GDPR)

### P: ¿Compete con OpenAI/Anthropic?
**R:** No en feature wars. Competimos en:
- **Privacidad:** Tu data no sale del datacenter
- **Precios:** 50% más barato
- **Transparencia:** Puedes auditar todo
- **Comunidad:** Tú decides hacia dónde va

Ellos tienen mejor chatbot. Nosotros tenemos mejor privacidad + gobernanza.

---

## Sobre Riesgos

### P: ¿Qué pasa si el proyecto falla?
**R:** Riesgos reales:

1. **No alcanzamos adopción:**
   - Mitigation: Outreach agresivo a startups EU, compliance-heavy industries
   - Fallback: Pivotar a herramienta para self-hosting, educación

2. **Competencia de OpenAI/Anthropic baja precios:**
   - Mitigation: Somos más barato + privacidad es diferenciador
   - Fallback: Diferenciador de privacidad + gobernanza

3. **Problema técnico (GPU falla, hack, etc.):**
   - Mitigation: Redundancia, backups, insurance
   - Fallback: Recuperación rápida, comunicación transparente

4. **Cambios regulatorios adversos:**
   - Mitigation: Monitorear EU AI Act, ajustar conforme sea necesario
   - Fallback: Adaptarnos o shutdown ordenado

### P: ¿Es segura la plataforma?
**R:** Tan segura como es posible:
- ✅ Stack open source (auditable)
- ✅ Datos locales (nunca sync a terceros)
- ✅ HTTPS + TLS 1.3
- ⚠️ Pero: Cualquier software tiene vulnerabilidades (es realista)

Documentación completa en `/docs/security.md`

### P: ¿Qué pasa con mis datos?
**R:** **No los tocamos.** 

- Input: Tu mensaje → GPU → Output: Respuesta
- Logs: Registramos que "Usuario X consumió 1000 tokens" (sin contenido)
- Retención: Logs se borran cada 90 días
- No training: Tus datos nunca se usan para entrenar modelos
- GDPR: Puedes pedir eliminación, respetamos dentro de 30 días

---

## Sobre Gobernanza

### P: ¿Tengo voz en decisiones?
**R:** Depende del tier:

| Tier | Voz |
|------|-----|
| Early Supporter | 1 voto (Asamblea anual) |
| Founding Member | Votación mensual + voz en decisiones medias |
| Stakeholder | Asiento en consejo + veto en decisiones mayores |

### P: ¿Puede el founder tomar decisiones sin mí?
**R:** 

| Decisión | Quién aprueba |
|----------|--------------|
| Gastos <€1k | Founder + team |
| Gastos €1k-€10k | Votación de Founding Members + Stakeholders |
| Gastos >€10k | Asamblea general (todos) |
| Cambios fundamentales | Asamblea general |

Founder puede mover rápido en pequeñas cosas, pero decisiones importantes requieren comunidad.

### P: ¿Qué pasa si me decepcionan las decisiones?
**R:** Opciones:
1. **Debate en Discord:** Defiende tu punto
2. **Vote:** Vota en contra si llega a votación
3. **Exit:** Si realmente no estás de acuerdo, puedes dejar de usar (aunque tu descuento es lifetime)

### P: ¿Puede el founder hacerse rico con esto?
**R:** Teóricamente no:
- Salary capped en presupuesto aprobado (€500/mes Año 1)
- Votación comunitaria si quiere raise
- Si proyecto crece, la riqueza se distribuye en infraestructura (beneficia a todos), no pockets personales

---

## Sobre Privacidad & Compliance

### P: ¿Es GDPR compliant?
**R:** Sí, con precauciones:
- ✅ Datos locales (no cloud)
- ✅ Right to deletion (borramos en 30 días)
- ✅ Privacy policy clara
- ⚠️ Auditoría anual requerida

Documentación en `/docs/compliance.md`

### P: ¿Qué industrias pueden usarlo?
**R:** Especialmente buenos para:
- Fintech (datos de transacciones sensibles)
- Legal tech (privilegio abogado-cliente)
- Healthtech (datos médicos)
- Gobierno (datos ciudadano)

Cualquiera puede usar, pero esto es donde somos diferenciador clave.

### P: ¿Puedo auditar el código?
**R:** Sí. Repositorio público en GitHub:
- https://github.com/akiles94/sovereign-ai
- Código de API, orchestrator, todo
- Exceptions: Database credentials, security keys (obviously)

---

## Sobre Timeline & Milestones

### P: ¿Cuándo lanzáis?
**R:** Roadmap oficial:
- **Meses 1-3:** Setup infraestructura (agosto-octubre 2026)
- **Meses 4-6:** Closed beta (~20 testers, octubre-diciembre 2026)
- **Meses 7-9:** Soft launch ~50-100 usuarios (enero-marzo 2027)
- **Meses 10-12:** Evaluación + votación (abril-junio 2027)

### P: ¿Y si no cumplis timeline?
**R:** Somos realistas. Roadmap es "best estimate", no garantizado. Vamos a comunicar delays claramente.

**No vamos a:**
- ❌ Comprometer calidad por speed
- ❌ Lanzar inseguro
- ❌ Ocultar problemas

### P: ¿Cuándo puedo usar la API?
**R:** 
- Tier 1 (Early Supporter): Beta acceso (probablemente Octubre 2026)
- Tier 2-3: Beta acceso prioritario + feedback loop

---

## Sobre Dinero & Open Collective

### P: ¿Dónde va mi dinero?
**R:** Open Collective:
- Transparencia 100%
- Cada gasto es visible
- Puedes auditar en cualquier momento
- https://opencollective.com/sovereign-ai

### P: ¿Cuál es la comisión de Open Collective?
**R:** 5% (estándar para plataformas nonprofit).

Esto significa:
- Si contribuyes €100
- €95 llega a tesorería
- €5 va a Open Collective (operating costs)

### P: ¿Puedo pedir refund?
**R:** Política de 30 días:
- 30 días desde contribución → Full refund, no preguntas
- Después → Es donación permanente

---

## Sobre Modelos & Tecnología

### P: ¿Por qué Llama + Qwen?
**R:** 
- **Licencia:** Comercialmente viables
- **Performance:** Comparable a OpenAI/Anthropic
- **Comunidad:** Soporte activo
- **Open weight:** Podemos auditar, ajustar, mejorar

### P: ¿Puedo usar otros modelos?
**R:** Posiblemente en Año 2:
- Mistral 8x7B (considera en roadmap)
- Fine-tuning en tus datos
- Modelos especializados

### P: ¿Qué tamaño de prompts soportáis?
**R:** Dependerá de modelo:
- Llama 70B: ~2k tokens (input + output)
- Qwen 32B: ~2k tokens
- Extendible en future si comunidad lo vota

### P: ¿Qué latencia esperar?
**R:** ~200-500ms (inicio a respuesta final)
- Comparable a OpenAI API
- GPUs optimizadas (vllm) para throughput

---

## Preguntas Finales

### P: ¿Cómo me entero de updates?
**R:** Canales:
- GitHub (watch repo)
- Discord (cuando lance)
- Email (subscribe a newsletter TBD)
- Twitter (cuando sea)

### P: ¿Puedo sugerir features?
**R:** Sí, GitHub issues o Discord. Comunidad vota prioridad.

### P: ¿Hay referral program?
**R:** Potencial en Año 2 si comunidad lo vota. No en Año 1 (más urgent: simplemente alcanzar users).

### P: ¿Puedo invertir en nombre de empresa?
**R:** Sí, contacta directamente (osvinueza94@gmail.com) para detalles fiscales.

---

## Contacto

**¿Preguntas no respondidas?**

- Email: osvinueza94@gmail.com
- Twitter: [@akiles94](https://twitter.com/akiles94) (cuando haya)
- Discord: [Link cuando lance]
- GitHub: https://github.com/akiles94/sovereign-ai (issues)

---

**Última actualización:** Agosto 2026
**Próxima actualización:** Octubre 2026 (después de primer close)
