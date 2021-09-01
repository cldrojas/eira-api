import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('entries')
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  userID: number;

  @Column({ type: 'varchar', length: 255 })
  content?: string;

  @Column({ type: 'varchar', length: 255 })
  category?: string;

  @Column({ type: 'int' })
  intensity?: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
