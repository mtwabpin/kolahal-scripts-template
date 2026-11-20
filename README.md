# Your Kolahal scripts

A repository of your own scripts for [Kolahal](https://github.com/mtwabpin/kolahal), the
keyboard-first terminal launcher for Android. Kolahal lists them in **Scripts → Get more scripts**,
beside [kolahal-scripts](https://github.com/mtwabpin/kolahal-scripts), and installs them from here.
You add and update scripts when you like: nobody else has to review or merge them.

## Set it up

1. On GitHub, press **Use this template** → **Create a new repository**. Make it public: Kolahal
   reads public repositories only.
2. In your new repository, open **Settings → Pages**, and under **Build and deployment** set
   **Source** to **GitHub Actions**.
3. Open **Actions**, choose **Scripts**, and press **Run workflow**. When it has finished, your
   list is at `https://<your user name>.github.io/<repository name>/index.json`.
4. In Kolahal, open **Scripts → Get more scripts → Sources**, tap **Add source**, and type
   `<your user name>/<repository name>`. Or type `script source add <your user name>/<repository name>`
   at the prompt.

Kolahal 0.5.15 or newer can add a source.

## Add your scripts

- Put each script in its own folder: `scripts/<name>/<name>.lua` or `scripts/<name>/<name>.js`. The
  name is the command you type to run it: up to 40 of `a-z`, `0-9`, `-` and `_`.
- Each script describes itself in its first lines: `@title`, `@desc`, `@author` and `@version` are
  needed. [Describing a script](https://mtwabpin.github.io/kolahal/scripting/overview/#describing-a-script)
  lists every line.
- Push to `main`. The **Scripts** workflow checks every script (`tools/check.mjs`) and publishes
  `index.json` and the scripts on GitHub Pages. A script that fails a check stops the publish, and
  the workflow's log says why.
- In Kolahal, Get more scripts shows the new version as an update. It keeps the list for an hour;
  the refresh button at the top reads it again at once.

`scripts/hello` and `scripts/hello-js` are examples, so there is something to publish at first.
Delete them when you have scripts of your own.

To write a script, start with the [scripting guide](https://mtwabpin.github.io/kolahal/scripting/overview/)
and the [API](https://mtwabpin.github.io/kolahal/scripting/api/). The `template-…` scripts in
[kolahal-scripts](https://github.com/mtwabpin/kolahal-scripts/tree/main/scripts) are commented
starting points: a command, a timer, an event on the phone, an API key, a fetch, log lines and widgets.

## How Kolahal uses it

- Kolahal reads `index.json`, which lists every script with its SHA-256 checksum, and installs a
  script only when the downloaded file matches it.
- A script you install arrives as any script from Get more scripts does: switching it on shows what
  it asks to use, and you can switch any of it off.
- Kolahal doesn't check the scripts in this repository. Anyone who adds it as a source trusts you,
  so keep it to scripts you would run yourself.

## Keeping the checker current

`tools/check.mjs` and `.github/workflows/scripts.yml` are copies of kolahal-scripts' own. When a new
Kolahal adds a directive or an access item, take the newer `tools/check.mjs` from
[kolahal-scripts](https://github.com/mtwabpin/kolahal-scripts/blob/main/tools/check.mjs).
