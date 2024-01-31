import axios from 'axios';
import { config } from '@config';

class HealthController {

  private UAPI_HEALTH = `${config.uapiUrl}/health`;
  private CAPI_HEALTH = `${config.capiUrl}/health`;

  public async wakeUpServices(): Promise<void> {
    await axios.get(`${this.UAPI_HEALTH}`);
    await axios.get(`${this.CAPI_HEALTH}`);
    return;
  }

}

const healthController = new HealthController();

export { healthController };
