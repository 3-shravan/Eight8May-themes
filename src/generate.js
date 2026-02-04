const fs = require("fs");
const path = require("path");
const schema = require("./schema/vscode");
const themes = require("./themes.config");

function load(dir, name) {
  return require(`./${dir}/${name}`);
}

function build() {
  themes.forEach((entry) => {
    const palette = load("palettes", entry.palette);

    entry.variants.forEach((v) => {
      const variant = load("variants", v);

      const filename = `${palette.id}-${v}-color-theme.json`;

      const json = schema({
        name: `${palette.id} (${v})`,
        type: palette.type,
        colors: palette.colors,
        styles: variant.styles,
      });

      fs.writeFileSync(path.join("themes", filename), json);

      console.log(`✓ generated ${filename}`);
    });
  });
}

build();
