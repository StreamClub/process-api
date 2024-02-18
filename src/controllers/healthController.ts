import axios from 'axios';
import { CAPI_HEALTH, UAPI_HEALTH } from '@config';

class HealthController {

  public async wakeUpServices(): Promise<void> {
    await axios.get(`${UAPI_HEALTH}`);
    await axios.get(`${CAPI_HEALTH}`);
    return;
  }

}

const healthController = new HealthController();

export { healthController };
