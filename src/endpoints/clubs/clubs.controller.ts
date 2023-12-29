import { Controller, Get, Query } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { Club } from 'src/core/entities/club';
import { Exception } from 'src/core/shared/exception';
import { clubData } from './dtos/club-data';

@Controller('clubs')
export class ClubsController {

  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  async getClubs(@Query('adminId') adminId: string) {
    return new Promise<Array<clubData>>((resolve, reject) => {
      this.clubsService.listClubsByAdminId(adminId)
      .then((result) => {
        resolve(result);
      }).catch((err : Exception) => {
        reject(err.getException());
      });
    });
  }
}
