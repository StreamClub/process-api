import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';

class HealthController {

  private UAPI_HEALTH = `${config.uapiUrl}/health`;

  public async wakeUpServices(): Promise<string> {
    const response = await axios.get(`${this.UAPI_HEALTH}`);
    return response.data;
  }

}

const healthController = new HealthController();

export { healthController  };
