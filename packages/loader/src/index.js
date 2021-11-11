//--------------------------------------------------------
//-- Read and process extendable config
//--------------------------------------------------------
import path from "path";
import fss from "@absolunet/fss";
import { Joi, validateArgument } from "@absolunet/joi";
import pkgDir from "pkg-dir";

module.exports = (root, filename = "extendable-config.yaml") => {
	validateArgument("root", root, Joi.string().required().empty());
	validateArgument("filename", filename, Joi.string().required().empty());

	return fss.readYaml(path.join(pkgDir.sync(root), filename));
};
