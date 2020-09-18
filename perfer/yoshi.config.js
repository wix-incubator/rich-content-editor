const glob = require('glob');

const bundleNames = glob.sync('./src/*.bundle.tsx');
const bundles = Object.keys(bundleNames).reduce((accu, bundle) => {
  const entry = bundle.replace('.bundle.tsx', '');
  return {
    ...accu,
    [entry]: bundle,
  };
}, {});

module.exports = {
  entry: {
    ...bundles,
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
    'prop-types': 'propTypes',
    lodash: '_',
  },
};
