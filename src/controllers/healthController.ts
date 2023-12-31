import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';

class HealthController {

  private UAPI_HEALTH = `${config.uapiUrl}/health`;

  public async wakeUpServices(): Promise<void> {
    await axios.get(`${this.UAPI_HEALTH}`);
    return;
  }

}

const healthController = new HealthController();

export { healthController  };
