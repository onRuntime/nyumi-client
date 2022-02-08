import { ResponseDto } from "../../../../common/interface/dto/response.dto";

import { IUser } from '../../user.interface';

export interface CreateUserResponseDto extends ResponseDto {
  data: {
    user: IUser;
    token: string;
  };
}
