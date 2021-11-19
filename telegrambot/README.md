# Heart2Heart Telegram bot

## Setting up

Following the guide at [https://www.adaltas.com/en/2021/06/09/pyrepo-project-initialization/](https://www.adaltas.com/en/2021/06/09/pyrepo-project-initialization/)

### Poetry

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

#### Take note

1. Use the virtual environment and vscode in project

   [https://stackoverflow.com/questions/59882884/vscode-doesnt-show-poetry-virtualenvs-in-select-interpreter-option](https://stackoverflow.com/questions/59882884/vscode-doesnt-show-poetry-virtualenvs-in-select-interpreter-option)

   ```bash
   poetry config virtualenvs.in-project true

   # If you have created the project already
   poetry env list  # shows the name of the current environment
   poetry env remove <current environment>
   poetry install  # will create a new environment using your updated configuration
   ```

2. Issues with Poetry

   After removing dependencies and reinstalling, Poetry has some issues with the reinstallation. More at [https://stackoverflow.com/questions/69326748/poetry-install-command-fails-whl-files-are-not-found](https://stackoverflow.com/questions/69326748/poetry-install-command-fails-whl-files-are-not-found)

   Hence just delete the `AppData\Local\pypoetry\Cache\artifacts` folder.
