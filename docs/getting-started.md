# Guía de Inicio Rápido

Bienvenido a Sovereign AI. Esta página te guiará a través de los primeros pasos.

---

## 1. ¿Es Sovereign AI para mí?

### Usa Sovereign AI si:
- ✅ Quieres privacidad real para tus datos
- ✅ Necesitas cumplimiento GDPR / EU AI Act
- ✅ Prefieres código auditables open source
- ✅ Quieres ser parte de una comunidad
- ✅ Presupuesto: ~€1-2 por millón tokens

### Alternativas si:
- ❌ Necesitas mejor calidad de respuesta → OpenAI/Anthropic
- ❌ Quieres máxima conveniencia → ChatGPT
- ❌ Tienes datos extremadamente sensibles → Self-host
- ❌ Prefieres no-code tool → Hugging Face Spaces

---

## 2. Registrarse como Inversor

### Opción A: Early Supporter (€25-€500)
- Descuento 10% lifetime
- Lista pública de Contributors
- Acceso a Discord comunitario

**Pasos:**
```
1. Ir a https://opencollective.com/sovereign-ai
2. Hacer clic "Contribute"
3. Seleccionar cantidad (€25, €100, €500, otra)
4. Pagar con tarjeta
5. ¡Listo! Email de confirmación con detalles
```

### Opción B: Founding Member (€500-€2,000)
- Descuento 15%
- Voz en decisiones mensuales
- Beta access a features

**Pasos:**
```
1. Contribuir €500+ en Open Collective, O
2. Email: osvinueza94@gmail.com con intención
3. Entrevista breve (para verificar interés genuino)
4. Acceso a Founding Members Discord
```

### Opción C: Stakeholder (€2,000+)
- Descuento 25%
- Asiento en Consejo
- Fine-tuning gratuito

**Pasos:**
```
1. Email: osvinueza94@gmail.com
2. Discusión detallada de términos
3. Firma de acuerdo (simple)
4. Acceso a board calls + financias completas
```

---

## 3. Esperar el Lanzamiento

### Timeline

**Agosto - Octubre 2026: Fase de Fundación**
- Setup de hardware
- Desarrollo de API
- Testing interno
- (Aún no disponible para públic)

**Octubre - Diciembre 2026: Closed Beta**
- Invitamos 10-20 early testers
- Tú recibirás invitación si eres investor Tier 2+
- Pruebas, feedback, ajustes

**Enero - Marzo 2027: Lanzamiento Suave**
- API disponible para todos
- Documentación pública
- Onboarding flow

### Mantente Actualizado

- 🔗 **GitHub:** https://github.com/akiles94/sovereign-ai (watch repo)
- 📧 **Email:** Confirma tu email en Open Collective
- 🐦 **Twitter:** [@akiles94](https://twitter.com/akiles94) (cuando lance)
- 💬 **Discord:** Invitación cuando sea live

---

## 4. Comenzar a Usar (Cuando Lancemos)

### Paso 1: Obtener API Key

```bash
# Login en dashboard (cuando exista)
$ curl https://sovereign-ai.com/login

# O via email si prefieres
$ email: osvinueza94@gmail.com
  "Quiero mi API key para acceso beta"
```

Recibirás:
```
API Key: sk-xxxxxxxxxxxxxx
Endpoint: https://api.sovereign-ai.com/v1/
```

### Paso 2: Instalar Cliente (Python)

```bash
pip install sovereign-ai
```

### Paso 3: Configurar Credenciales

```python
import sovereign_ai

client = sovereign_ai.Client(api_key="sk-xxx")
```

### Paso 4: Hacer Tu Primer Request

```python
response = client.completions.create(
    model="llama-70b",
    prompt="¿Cuál es la capital de Francia?",
    max_tokens=50
)

print(response.choices[0].text)
# Output: "La capital de Francia es París..."
```

### Paso 5: Revisar Billing

```bash
$ curl https://api.sovereign-ai.com/v1/usage \
    -H "Authorization: Bearer sk-xxx"

{
  "tokens_consumed_today": 1250,
  "tokens_consumed_month": 5000,
  "cost_today": "€0.02",
  "cost_month": "€0.08",
  "discount": "15%" (if Founding Member)
}
```

---

## 5. Mejores Prácticas

### Seguridad

```python
# ❌ MAL: Hardcoded API key
client = sovereign_ai.Client(api_key="sk-xxx")

# ✅ BIEN: Environment variable
import os
api_key = os.environ.get("SOVEREIGN_AI_API_KEY")
client = sovereign_ai.Client(api_key=api_key)
```

### Pricing

```python
# ✅ BIEN: Set max tokens to control cost
response = client.completions.create(
    model="llama-70b",
    prompt="...",
    max_tokens=100  # Limita tokens output
)

# Costo estimado: 100 tokens * €0.0000015 = €0.00015
```

### Resiliencia

```python
import time
from tenacity import retry, wait_exponential

@retry(wait=wait_exponential(multiplier=1, min=2, max=10))
def call_sovereign_ai():
    return client.completions.create(...)

# Reintentar con backoff si falla
```

---

## 6. Modelos Disponibles

### Llama 70B
- **Mejor para:** Razonamiento compleju, código, análisis
- **Latencia:** ~300-500ms
- **Costo:** €1.50/M tokens (con descuento: €1.27-1.12)

```python
response = client.completions.create(
    model="llama-70b",
    prompt="Escribe un función Python que..."
)
```

### Qwen 32B
- **Mejor para:** Chat, respuestas rápidas, baja latencia
- **Latencia:** ~150-250ms
- **Costo:** €1.20/M tokens (con descuento: €1.02-0.90)

```python
response = client.completions.create(
    model="qwen-32b",
    prompt="¿Cómo estás?"
)
```

---

## 7. Soporte & Comunidad

### Obtener Ayuda

**Para problemas técnicos:**
- GitHub Issues: https://github.com/akiles94/sovereign-ai/issues
- Email: support@sovereign-ai.com
- Discord: #support channel

**Para preguntas sobre inversión:**
- Email: osvinueza94@gmail.com
- Open Collective comments

**Para reportar seguridad:**
- Email: security@sovereign-ai.com
- PGP key: [disponible en website cuando exista]

### Comunidad

- 💬 Discord: Debates, feedback, socializar
- 🐙 GitHub: Código, issues, PRs
- 📰 Blog: Updates, case studies

---

## 8. Ejemplos de Código

### Chat Simple

```python
from sovereign_ai import Client

client = Client(api_key="sk-xxx")

messages = [
    {"role": "user", "content": "Hola, ¿cómo estás?"}
]

response = client.chat.create(
    model="qwen-32b",
    messages=messages
)

print(response.choices[0].message.content)
```

### Streaming (Respuesta en tiempo real)

```python
response = client.completions.create(
    model="llama-70b",
    prompt="Explica la relatividad especial en 100 palabras",
    stream=True
)

for chunk in response:
    print(chunk.choices[0].text, end="")
```

### Batch Processing

```python
# Procesar múltiples prompts eficientemente
prompts = [
    "¿Qué es machine learning?",
    "¿Cómo funciona el blockchain?",
    "Explica la criptografía"
]

responses = client.completions.create_batch(
    model="llama-70b",
    prompts=prompts
)

for prompt, response in zip(prompts, responses):
    print(f"Q: {prompt}")
    print(f"A: {response.choices[0].text}\n")
```

---

## 9. Roadmap para Usuarios

**Año 1 (2026):**
- ✅ API básica con 2 modelos
- ✅ Dashboard de uso
- ✅ Documentación

**Año 2 (2027):**
- ⏳ Fine-tuning de modelos
- ⏳ Integración con herramientas populares
- ⏳ Modelos especializados

**Año 3+ (2028+):**
- ⏳ Modelos multimodales
- ⏳ Agentes de IA
- ⏳ Federación de datacenters

---

## 10. FAQ Rápida

**P: ¿Cuánto cuesta?**
A: €1-2 por millón tokens (después 10-25% descuento si eres investor).

**P: ¿Cuándo puedo usar?**
A: Beta octubre 2026, público enero 2027.

**P: ¿Necesito infraestructura propia?**
A: No, nosotros la manejamos. Solo necesitas API key.

**P: ¿Puedo cambiar de tier después?**
A: Sí, contribuye más para escalar a Founding Member o Stakeholder.

**P: ¿Dónde están mis datos?**
A: En nuestro datacenter en España, nunca enviado a terceros.

---

## Próximos Pasos

1. **Decide tu tier:** Early Supporter / Founding Member / Stakeholder
2. **Invierte:** Open Collective o email
3. **Únete a comunidad:** Discord, GitHub
4. **Espera el lanzamiento:** Octubre-Enero
5. **¡Comienza a usar!**

---

**¿Preguntas?** Email: osvinueza94@gmail.com

**Únete a nosotros en construir IA privada, de verdad.**

---

**Última actualización:** Agosto 2026
