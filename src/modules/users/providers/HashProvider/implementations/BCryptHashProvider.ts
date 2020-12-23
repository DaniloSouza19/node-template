import { compare, hash } from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

export default class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const passwordHashed = await hash(payload, 8);

    return passwordHashed;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const passwordMatches = await compare(payload, hashed);

    return passwordMatches;
  }
}
