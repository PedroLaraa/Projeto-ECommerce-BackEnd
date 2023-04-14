import { CityEntity } from 'src/city/entities/city.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'adress' })
export class AdressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'complement', nullable: true })
  complement: string;

  @Column({ name: 'number', nullable: false })
  number: number;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'city_id', nullable: false })
  cityId: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.adresses)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;

  @ManyToOne(() => CityEntity, (city) => city.adresses)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  city?: CityEntity;
}
