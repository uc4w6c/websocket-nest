import { Controller, Get, Req } from '@nestjs/common';

@Controller('broadcast')
export class BroadcastController {
    @Get()
    findAll(@Req() req): any {
        console.log(req);
        return { statusCode: 200, body: 'websocket test'};
    }
}
