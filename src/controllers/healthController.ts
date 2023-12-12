import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';

class HealthController {

  private UAPI_HEALTH = `${config.uapiUrl}/health`;

}

const healthController = new HealthController();

export { healthController  };
