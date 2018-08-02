
## Installation
  * Download Annaconda3 (Python3.6 version) from https://www.anaconda.com/download/
  * Install Annaconda
  * Run `git clone https://github.com/oeway/ImJoy`
  * Run `cd ImJoy/backend && pip install -r requirements.txt`

## Usage
  * Run `python pluginEngine.py`
  * Go to https://imjoy.io to create a Python Plugin, here is an example:
```html
<config>
{
  "name": "Python Hello World Plugin",
  "type": "demo/hello-world",
  "mode": "pyworker",
  "version": "0.1.0",
  "api_version": "0.1.1",
  "description": "A python plugin demo.",
  "tags": ["demo", "op"],
  "ui": "print hello world from python",
  "inputs": null,
  "outputs": null,
  "icon": null,
  "env": null,
  "requirements": ["numpy"],
  "cmd": "python",
  "dependencies": []
}
</config>

<script lang="python">
import numpy as np

class PythonPlugin():
  def setup(self):
    pass

  def run(self, my):
    print('hello world.')
    return my

api.export(PythonPlugin())
</script>

```

  By default, python plugins from ImJoy will be executed in the default conda environment(Python 3.6). If you want to run a plugin in a different conda environment, you can specify it by setting the `env` field in the `<config>` section of the plugin.

  Examples:

    * If you want to run your plugin with Python 2.7, you just needed to add the following fields to your `<config>`:
  ```html
  <config>
    ...
    "env": "conda create -y -n python2 python=2.7 anaconda",
    "requirements": ["numpy", "scipy"],
    "cmd": "python",
    ...
  </config>
  ```

   * Similarly, if you want to run your plugin with Python 3.6, you just needed to add the following fields to your `<config>`:
  ```html
  <config>
    ...
    "env": "conda create -y -n python3 python=3.6 anaconda",
    "requirements": ["numpy", "scipy"],
    "cmd": "python",
    ...
  </config>
  ```

  **Note**: in the `env` field, you need to use `-n XXXX` to name your environment, otherwise, it will use the plugin name to name the environment.