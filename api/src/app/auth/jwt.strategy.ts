import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { configService } from '../../config/config.service'
import { UserRepository } from '../user/user.repository'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getValue('JWT_SECRET'),
    })
  }

  async validate(payload: any) {
    return await this.userRepository.findOne({ id: payload.sub })
  }
}
