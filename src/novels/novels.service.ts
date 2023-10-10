import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Novel } from './entities/novel.entity';

@Injectable()
export class NovelsService {
  constructor(
    @InjectRepository(Novel) private novelRepo: Repository<Novel>,
  ) { }

  create(createNovelDto: CreateNovelDto) {
    return 'This action adds a new novel';
  }

  findAll() {
    return `This action returns all novels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} novel`;
  }

  update(id: number, updateNovelDto: UpdateNovelDto) {
    return `This action updates a #${id} novel`;
  }

  remove(id: number) {
    return `This action removes a #${id} novel`;
  }
}
