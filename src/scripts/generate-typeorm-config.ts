import { ConfigService } from '@nestjs/config';
import { TYPEORM_CONFIG } from 'src/config/constants';
import fs = require('fs');

/**
 * This script will generate orm.config
 * @param config
 */

const generateTypeormConfigFile = (config: ConfigService) => {
  const typeormConfig = config.get(TYPEORM_CONFIG);
  fs.writeFileSync('ormconfig.json', JSON.stringify(typeormConfig, null, 2));
};

export default generateTypeormConfigFile;
