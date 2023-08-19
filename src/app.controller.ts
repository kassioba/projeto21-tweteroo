import { Body, Controller, Get, Post, HttpCode, HttpStatus, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { createUserDto } from './dtos/user.dto';
import { createPageDto, createTweetDto } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sign-up')
  @HttpCode(HttpStatus.OK)
  postUsers(@Body() body: createUserDto): void{
    this.appService.postUsers(body)
  }

  @Post('/tweets')
  postTweets(@Body() body: createTweetDto): void {
    this.appService.postTweets(body)
  }

  @Get('/tweets')
  getTweets(@Query() page: createPageDto){
    const pageNumber = Number(page.page)

    return this.appService.getTweets(pageNumber)
  }

  @Get('/tweets/:username')
  getUserTweets(@Param() user: { username: string }){
    const username = user.username

    return this.appService.getUserTweets(username)
  }
}
