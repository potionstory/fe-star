
import React, { Component } from 'react';
import './ScheduleBox.scss';

class ScheduleBox extends Component {
  render() {
    return (
      <>
        <div className="card-body">
          <div className="card-schedule">
            <div className="card-inner">
              <table>
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>시간</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>19:00 - 19:55</td>
                    <td>저녁식사(1부)</td>
                  </tr>
                  <tr>
                    <td>19:55 - 20:05</td>
                    <td>자리 바꾸기</td>
                  </tr>
                  <tr>
                    <td>20:05 - 21:00</td>
                    <td>저녁식사(2부)</td>
                  </tr>
                  <tr>
                    <td>21:00 - 21:10</td>
                    <td>쉬는시간</td>
                  </tr>
                  <tr>
                    <td>21:10 - 21:40</td>
                    <td>빙고게임</td>
                  </tr>
                  <tr>
                    <td>21:40 - 22:10</td>
                    <td>행운권 추첨</td>
                  </tr>
                  <tr>
                    <td>22:10 - 22:40</td>
                    <td>팀 게임</td>
                  </tr>
                  <tr>
                    <td>22:40 - 23:00</td>
                    <td>청소 및 마무리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default ScheduleBox;

