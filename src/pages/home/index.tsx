import { Layout } from "../../components/layout"
import { 
  Wrapper, 
  HeaderContainer, 
  InputContainer 
} from "./styled"
import githubImg from "../../assets/img/github-bordered.png"
import { useUserContext } from "../../contexts/user"
import { Show } from '../../components/show'


export const Home: React.FC = () => {
  const { getUser, loading, inputValue, handleChange } = useUserContext()

  return (
    <Layout>
      <Wrapper>
        <HeaderContainer>
          <img src={githubImg} alt="Imagem do github" />
          <strong>Encontre um usuário no github</strong>
          <p>Encontrar um usuário no github tornou-se muito mais fácil com nossa tecnologia, 
            basta digitar o nome de usuaio no campo abaixo.</p>
        </HeaderContainer>
        <InputContainer>
          <input 
            data-testid="home-input" 
            value={inputValue} 
            onChange={handleChange} 
            type="text" 
            placeholder="Digite aqui..." />
          <button
            className={loading ? 'loading' : ''} 
            data-testid="home-button" 
            onClick={() => getUser(inputValue)}
          >
            <Show condition={loading}>
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px", color: 'var(--white)' }}
              />
            </Show>
            Buscar usuário
          </button>
        </InputContainer>
      </Wrapper>
    </Layout>
  )
}
