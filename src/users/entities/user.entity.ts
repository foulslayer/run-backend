import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Historik } from 'src/historik/entities/historik.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  points: number;
  default: () => 0;

  @OneToMany(() => Historik, (historik) => historik.user) // The 'user' here refers to the property in Post entity.
  historiks: Historik[];
}
