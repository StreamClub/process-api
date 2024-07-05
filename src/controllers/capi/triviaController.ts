import { Request } from '@models';
import { TRIVIA_URL } from '@config';
import { authorizedGet } from 'utils';

class TriviaController {
    public async getTrivia(req: Request) {
        return authorizedGet(`${TRIVIA_URL}/${req.params.contentType}/${req.params.contentId}`,
            req.headers.authorization
        );
    }

    public async getTrivias(req: Request) {
        return authorizedGet(`${TRIVIA_URL}`, req.headers.authorization);
    }
}

export const triviaController = new TriviaController();
