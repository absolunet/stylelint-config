//--------------------------------------------------------
//-- stylelint config
//--------------------------------------------------------
import pkgDir from 'pkg-dir';
import loader from '@absolunet/stylelint-loader';


const config = loader(pkgDir.sync(__dirname));


module.exports = config;
