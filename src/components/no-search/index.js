import React from "react";
import * as S from "./styled";

const NoSearch = () => {
  return (
    <S.Wrapper>
      <h1>Nenhum usuario pesquisado</h1>
      <a href="https://github.com/benedito80">
        Perfil do usuário padrão...
      </a>
    </S.Wrapper>
  );
};

export default NoSearch;
