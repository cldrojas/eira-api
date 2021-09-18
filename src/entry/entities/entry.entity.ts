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

  @Column({ name: 'user_id', type: 'int', nullable: false })
  userID: number;

  @Column({ type: 'varchar', length: 255 })
  content: string;

  @Column({ type: 'varchar', length: 255 })
  category: string;

  @Column({ type: 'int' })
  intensity: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
