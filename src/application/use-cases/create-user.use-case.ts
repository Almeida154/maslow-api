import { UserContract } from '@/application/contracts';
import { ConflictError } from '@/application/errors';
import { User } from '@/domain/models';

interface ICreateUserUseCase {
  execute: UserContract['create'];
}

export class CreateUserUseCase implements ICreateUserUseCase {
  private readonly userRepository: UserContract;

  constructor(userRepository: UserContract) {
    this.userRepository = userRepository;
  }

  async execute(user: User): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(user.email);

    if (emailExists) throw new ConflictError('Email em uso.');

    const created = await this.userRepository.create(user);

    return created;
  }
}
