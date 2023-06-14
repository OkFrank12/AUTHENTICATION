export interface iBtn {
  w: string;
  bg: string;
  clr: string;
  text: string;
  fs: string;
  to?: string;
  onClick?: () => void;
}

export interface iProps {
  name?: boolean;
  phone?: boolean;
  email?: boolean;
  password?: boolean;
  confirm?: boolean;

  name1?: string;
  namePlace?: string;

  email1?: string;
  emailPlace?: string;

  phone1?: string;
  phonePlace?: string;

  password1?: string;
  passwordPlace?: string;

  confirm1?: string;
  confirmPlace?: string;
}

export interface iGlobal {
  actualName?: string;
  setActualName?: any

  actualEmail?: string;
  setActualEmail?: any

  actualPhone?: string;
  setActualPhone?: any

  actualPassword?: string;
  setActualPassword?: any

  actualConfirm?: string;
  setActualConfirm?: any
}


export interface iCard {
    text?: string;
}