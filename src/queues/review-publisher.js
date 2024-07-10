import { winstonLogger } from '../../../9-jobber-shared/src/logger.js'
import { createConnection } from './connection.js'

const log = winstonLogger('reviewServiceProducer', 'debug');

async function publishFanoutMessage(channel, exchangeName, message, logMessage) {
    try {
        if (!channel) {
            channel = await createConnection();
        }
        await channel.assertExchange(exchangeName, 'fanout');
        channel.publish(exchangeName, Buffer.from(message));
        log.info(logMessage);
    } catch (error) {
        log.log('error','ReviewService publishDirectMessage() method error',error);
    }
}

export {publishFanoutMessage};