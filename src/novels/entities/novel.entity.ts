import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Novel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  pictureUrl: string;

  @Column()
  category: string;

  @Column('decimal', { scale: 1 })
  rate: number;
}