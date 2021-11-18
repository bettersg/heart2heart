# Heart2Heart Telegram bot

## Setting up

Following the guide at [https://www.adaltas.com/en/2021/06/09/pyrepo-project-initialization/](https://www.adaltas.com/en/2021/06/09/pyrepo-project-initialization/)

### Installing Poetry

Poetry website: [https://python-poetry.org/](https://python-poetry.org/)

Installation guide: [https://python-poetry.org/docs/master/](https://python-poetry.org/docs/master/)

#### Bash

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py | python -
```

#### Powershell

```powershell
(Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py -UseBasicParsing).Content | python -
```

Start poetry with this command. This will set up the virtual environment and poetry

```bash
poetry install
```

After which activate the virtual environment with this command

```bash
poetry shell
```

You can add dependencies using poetry

```bash
# -D means development
poetry add -D pandas

# removing installing
poetry remove pandas
```
