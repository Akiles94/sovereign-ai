# Guía de Contribuciones

Valoramos todas las formas de contribución. Esta guía te ayudará a participar.

---

## Tipos de Contribuciones

### 1. Código

**Requisitos:**
- Fork el repo
- Crea branch: `feature/lo-que-hagas`
- Commit con mensajes claros
- Push y abre Pull Request

**Áreas activas:**
- `/api` - Backend FastAPI
- `/orchestrator` - Kubernetes / inference
- `/client` - SDK Python
- `/docs` - Documentación

**Procesos:**
```bash
git clone https://github.com/akiles94/sovereign-ai.git
cd sovereign-ai
git checkout -b feature/mi-feature

# ... haz cambios ...

git add .
git commit -m "Agregar X feature"
git push origin feature/mi-feature
# Abre PR en GitHub
```

### 2. Documentación

**Escribir o mejorar:**
- `/docs` - Documentación pública
- Código comments
- Blog posts (en futuro)
- Tutoriales

**Proceso:**
```bash
# Editar archivo markdown
vim docs/security.md

# Commit
git commit -m "Mejorar documentación de seguridad"
git push origin feature/docs-security
```

### 3. Reportar Bugs

**Crear GitHub Issue:**
```
Title: [BUG] Descripción breve del problema

Body:
## Descripción
Qué pasó

## Pasos para reproducir
1. ...
2. ...

## Comportamiento esperado
Qué debería pasar

## Evidencia
- Logs
- Screenshots
- Stack trace
```

### 4. Sugerir Features

**GitHub Issue:**
```
Title: [FEATURE] Descripción de feature

Body:
## Problema
Qué problema resuelve

## Solución propuesta
Cómo deberías resolverlo

## Alternativas
Otras formas de atacarlo

## Contexto adicional
```

### 5. Investigación y Testing

**Areas necesitadas:**
- Security audits (non-invasive)
- Performance benchmarks
- Compliance testing
- Edge cases discovery

**Publicar resultados en GitHub Discussions.**

### 6. Inversión Financiera

Ver `/docs/investment-tiers.md` para cómo invertir.

### 7. Comunidad

**Moderación, soporte, etc:**
- Responder preguntas en GitHub
- Moderar Discord (cuando exista)
- Organizar eventos
- Escribir case studies

---

## Proceso de PR (Pull Request)

### 1. Prepara tu Cambio

```bash
# Update main
git fetch origin
git rebase origin/main

# Crea tu branch
git checkout -b feature/x
```

### 2. Haz Cambios

```bash
# Edita archivos
vim src/api.py

# Test localmente
pytest
flake8 src/
mypy src/
```

### 3. Commit con Mensaje Claro

```bash
git commit -m "Agregar endpoint de billing

- Calcula tokens consumidos por usuario
- Retorna cost breakdown
- Incluye descuentos aplicables

Fixes #42"
```

**Formato:**
```
<tipo>: <descripción corta>

<descripción larga si es necesaria>

Fixes #<issue-number> (si aplica)
Co-authored-by: Nombre <email> (si colaboras)
```

### 4. Push y PR

```bash
git push origin feature/x

# Abre PR en GitHub
# - Titulo: "Agregar endpoint de billing"
# - Description: Describe qué y por qué
# - Link related issues
```

### 5. Responde Reviews

Si revisor pide cambios:
```bash
# Haz cambios
vim src/api.py

# Commit adicional (no amend si ya está pushed)
git commit -m "Address review: Add error handling"
git push origin feature/x

# Esperamos feedback
```

### 6. Merge

Cuando aprobado:
```bash
# Maintainer merges en GitHub
```

---

## Estándares de Código

### Python

**Formato:**
```bash
black src/       # Formateador automático
flake8 src/      # Linting
mypy src/        # Type checking
```

**Ejemplo correcto:**
```python
from typing import Optional

def calculate_cost(tokens: int, discount: float = 0.0) -> float:
    """Calculate API cost for tokens consumed.
    
    Args:
        tokens: Number of tokens
        discount: Discount percentage (0.0 - 1.0)
    
    Returns:
        Cost in euros
    """
    base_price = 0.0000015  # €1.50 per M tokens
    price = tokens * base_price
    return price * (1 - discount)
```

### Documentación

**Markdown:**
```markdown
# Título Principal

## Subsección

Párrafo con **bold** y *italic*.

### Código

\`\`\`python
def example():
    pass
\`\`\`

### Listas

- Item 1
- Item 2
  - Sub-item
```

---

## Testing

### Unit Tests

```bash
# Correr tests
pytest

# Con coverage
pytest --cov=src/
```

**Ejemplo test:**
```python
from src.billing import calculate_cost

def test_calculate_cost_no_discount():
    cost = calculate_cost(1_000_000)
    assert cost == pytest.approx(1.50)  # €1.50 per M tokens

def test_calculate_cost_with_discount():
    cost = calculate_cost(1_000_000, discount=0.15)
    assert cost == pytest.approx(1.50 * 0.85)
```

### Integración Tests

```bash
# Test API end-to-end
pytest tests/integration/
```

---

## Licencias & IP

### Código

**License:** Apache 2.0 (propuesto, votado por comunidad)

Contribuyendo, aceptas:
- ✅ Tu código es open source
- ✅ Otros pueden usarlo bajo Apache 2.0
- ✅ Reconocimiento en CONTRIBUTORS.md

### Documentación

**License:** Creative Commons CC-BY 4.0

**Significa:**
- ✅ Público y remezclable
- ✅ Debe creditar autor
- ✅ No comercial sin permiso

### Contributor Agreement

Simple:
```
By submitting a pull request to this project,
you agree that:

1. Your contribution is your own original work
2. You grant this project a perpetual license to use it
3. You will not assert any IP claims
```

(Formal CLA vinculante: Año 2 si crecemos)

---

## Comunidad & Code of Conduct

### Esperamos

✅ **Respeto:** A otros, a diferentes opiniones
✅ **Claridad:** Comunicación honesta
✅ **Inclusión:** Bienvenida a todxs
✅ **Privacidad:** No revelar info sensible

### No toleramos

❌ Harassment, discrimination
❌ Spam, trolling
❌ Intentos de hijack / sabotaje
❌ Compartir credentials/secrets

**Violaciones:** Warning → Ban de comunidad

---

## Roadmap de Contribuciones

### Áreas Prioritarias (Año 1)

1. **API Stability** (Crítico)
   - Bug fixes
   - Performance improvements
   - Error handling

2. **Documentation** (Importante)
   - API docs
   - Deployment guide
   - Security best practices

3. **Testing** (Importante)
   - Unit tests
   - Integration tests
   - Load testing

### Áreas Futuras (Año 2+)

- Modelos especializados
- Fine-tuning infrastructure
- Integrations con herramientas populares
- Frontend dashboard
- Mobile SDK

---

## Contacto para Colaboradores

**¿Preguntas sobre contribuciones?**

- GitHub Issues: Preguntas técnicas públicas
- Email: osvinueza94@gmail.com (preguntas privadas)
- Discord: #contributors (cuando sea live)

**Mentorship:**
Si quieres apoyo en tu primera contribución:
- Email con "First-time contributor" en subject
- Happy to pair program / review extensively

---

## Reconocimiento

### CONTRIBUTORS.md

Todos los contribuidores listados públicamente (si lo desean).

```markdown
# Contributors

Agradecemos a:

## Code
- @github-user-1 - Feature X
- @github-user-2 - Bug fix Y

## Documentation
- Jane Doe - Security guide

## Community
- Alex - Community moderation

## Investors
- Acme Corp (Founding Member)
- [+47 más en investment page]
```

### Badges & Roles

Posibles en futuro (Año 2+):
- Maintainer (core contributor)
- Reviewer (code review)
- Community Champion (engagement)

---

## Ejemplos de Contribuciones

### Ejemplo 1: Bug Fix Pequeño

```
1. Encuentras error en handling de rate limits
2. Creas issue (o linkea PR a issue existente)
3. Arreglas en local: vim src/api/ratelimit.py
4. Escribes test: tests/test_ratelimit.py
5. Commit: "Fix: Rate limit header parsing"
6. Push y abre PR
7. Revisor sugiere mejoría, haces change
8. Aprobado y merged
9. Tu nombre en CONTRIBUTORS.md
```

### Ejemplo 2: Documentación Grande

```
1. Propones: "Falta documentación de deployment"
2. Discussion en GitHub (¿qué incluir?)
3. Escribes: docs/deployment-guide.md (1000+ words)
4. Incluye: Prerequisites, step-by-step, troubleshooting
5. PR con ejemplos
6. Revisor sugiere clarificaciones
7. Updates y aprobado
8. Featured en documentación pública
```

### Ejemplo 3: Inversión + Consejo

```
1. Inviertes como Founding Member (€1000)
2. Participas en Discord activamente
3. Sugieres mejoras en governance
4. Eventualmente: Promovido a Stakeholder
5. Asiento en Consejo Comunitario
6. Voz real en decisiones del proyecto
```

---

## Gracias

**Cada contribución, sin importar tamaño, es valorada.**

Juntos estamos construyendo IA privada que la gente realmente controla.

---

**Última actualización:** Agosto 2026
