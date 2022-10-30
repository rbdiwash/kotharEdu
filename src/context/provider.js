import KotharContext from "./context";
import useStatesAndActions from "./useStateandActions";
const KotharProvider = ({ children }) => (
  <KotharContext.Provider value={useStatesAndActions()}>
    {children}
  </KotharContext.Provider>
);

export default KotharProvider;
