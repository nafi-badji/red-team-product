const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports= {
    "presets": ["next/babel"],
    "plugins": [["styled-components", { "ssr": true, "displayName": true }]]
}

export default config;
