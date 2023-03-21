import React from "react";

class Hitta extends React.Component{
    render(){
        return(
            <main>
                <h1>HITTA MÄKLARE</h1>

<section class="tablee">
    <table>
        <tr>
          <th>Namn</th>
          <th>Sålt i området</th>
          <th>Sålt totalt</th>
          <th>Företag</th>
        </tr>
        <tr>
          <td>Johan</td>
          <td>31</td>
          <td>97</td>
          <td>Husman Hagberg</td>
        </tr>
        <tr>
          <td>Anna</td>
          <td>42</td>
          <td>89</td>
          <td>Länsförsäkringar</td>
        </tr>
      </table>
</section>
            </main>
        );
    }
}
export default Hitta;