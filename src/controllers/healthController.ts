import axios from 'axios';
import { CAPI_HEALTH, RAPI_HEALTH, UAPI_HEALTH, config } from '@config';

class HealthController {

  public async wakeUpServices(): Promise<void> {
    const servicesCalls = [
      axios.get(`${UAPI_HEALTH}`),
      axios.get(`${CAPI_HEALTH}`),
      axios.get(`${RAPI_HEALTH}`, {
        headers: {
          'Secret': config.rapiSecret
        }
      })
    ];
    await Promise.all(servicesCalls);
    return;
  }

}

const healthController = new HealthController();

export { healthController };
