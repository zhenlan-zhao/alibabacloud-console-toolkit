import * as Webpack from 'webpack';

type CssConditionType = 'legacy' | 'stable' | 'widget';

interface BreezrReactOptions {
  port?: number;
  host?: string;
  https?: boolean;
  publicPathOnDev?: string;

  cwd?: string;

  // webpack 配置
  entry?: string;
  context?: any;
  output?: {
    filename: string;
    path: string;
    publicPath: string,
    chunkFilename: string,
  };
  bail?: boolean;
  status?: {
    children: boolean;
  };
  sourceMap?: boolean;

  // style 配置
  useLegacyCssModules?: boolean;
  condition?: CssConditionType;
  classNamePrefix?: string;
  theme?: string | ThemeDef;

  // babel-loader 配置
  babel?: Function;
  disableHmr?: boolean;
  disableExtractText?: boolean;
  disableUglify?: boolean;
  disableReactHotLoader?: boolean;
  babelExclude?: Webpack.RuleSetCondition;
  babelPluginWindRc?: boolean;
  babelUseBuiltIns?: boolean;
  babelPluginWindIntl?: boolean;
  babelPluginWindCherryPick?: boolean;
  useThreads?: boolean;
  useHappyPack?: boolean;
  es5ImcompatibleVersions?: boolean,

  // file-loader 配置
  staticAssetsOutputPath?: string;
  staticAssetsFileRule?: RegExp;
  staticAssetsBase64Limit?: number;
  staticAssetsOutputName?: string;

  javascriptEnabled?: boolean;

  // plugins 配置
  defineGlobalConstants?: {
    [key: string]: any,
  };
  htmlFileName?: string;
  disableErrorOverlay?: boolean;
  disableHtml?: false;
  noProgress?: boolean;
  noOpen?: false;
  useTerserPlugin?: true;
  uglifyOptions?: Object;
  htmlXmlMode?: boolean;

  // experiment
  experiment?: {
    skeleton: boolean;
  };

  // polyfill
  disablePolyfill?: boolean;

  analyze?: boolean;
}

/**
 * babel 的 options
 */
interface BreezrReactBabelOption {
  // babel 配置
  babel?: Function;
  useHappyPack?: boolean;
  reactHotLoader?: boolean;
  reactCssModules?: boolean;
  reactCssModulesContext?: string;
  reactCssModulesResolvePath?: string;
  windCherryPick?: boolean;
  useBuiltIns?: boolean;
  windRc?: boolean;
  windIntl?: boolean;
  es5ImcompatibleVersions?: boolean;
  exclude?: Webpack.RuleSetCondition;
  include?: Webpack.RuleSetCondition;
}

type CssModules = boolean | 'global' | 'local';

/**
 * style 的 options 类型
 */
interface BreezrStyleOptions {
  cwd: string;
  theme?: string | ThemeDef;
  modules?: CssModules;
  shouldExtract: boolean;
  cssPublicPath?: string;
  loader?: string;
  classNamePrefix?: string;
  loaderOptions?: any;
  sourceMap?: boolean;
  hasPostCSSConfig?: boolean;
  condition?: CssConditionType;
}

interface ThemeDef {
  [key: string]: string;
}