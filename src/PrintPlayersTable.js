import React from "react";

function PrintPlayersTable(props)
{
    return(
        <div>
            <table>
                {props.players.map((player) => {
                    return (
                        <tr>
                            <td>
                                {player.firstName} {player.lastName}
                            </td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    )
}

export default PrintPlayersTable;