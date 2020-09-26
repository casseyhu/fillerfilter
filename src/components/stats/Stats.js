import React, {Component} from 'react'
import { Chart } from "react-google-charts";
import FillerWords from './FillerWords'

class Stats extends Component {
    render() {
        var filler_dictionary = {};
        var transcript_dictionary = {}
        for (const key of FillerWords) {
             filler_dictionary[key] = 0;
        }
        const transcript = this.props.transcript.toLowerCase().split(" ");
        for(var i = 0; i < transcript.length; i++){
            console.log(filler_dictionary[transcript[i]])
            if(filler_dictionary[transcript[i]] != null)
                filler_dictionary[transcript[i]]++;
            if(transcript_dictionary[transcript[i]] == null)
                transcript_dictionary[transcript[i]] = 1;
            else
                transcript_dictionary[transcript[i]]++;
        }

        var words = Object.keys(transcript_dictionary).map(function(key) {
            return [key, transcript_dictionary[key]];
          });
          
        // Sort the array based on the second element
        words.sort(function(first, second) {
            return second[1] - first[1];
        });

        var top_words = words.slice(0, 10);
        var data = []
        for(var key in filler_dictionary){
            if(filler_dictionary[key] != 0)
                data.push([key, filler_dictionary[key]])
        }
        top_words.unshift(['Word', 'Frequency']);
        data.unshift(['Filler Words', "Frequency"]);
        return (
            <div>
                <div className="chart">
                    <p>Time Elapsed: {this.props.timeElapsed} seconds</p>
                    <b>Top 10 Common Words in Transcript</b>
                    <Chart chartType= "Table" style={{paddingRight: '2%', paddingBottom: '2%'}} data={top_words}
                    options={{
                        height: '50%',
                        width: '100%',
                        showRowNumber: true,
                        chart: {
                        },
                    }}/>
                    <Chart chartType="PieChart" style={{paddingRight: '2%'}} data={data} 
                    options={{
                        title: "Most Common Filler Words",
                        width: '100%',
                        height: "50%",
                        chart: {
                        },
                    }}/>
                </div>
            </div>
        )
    }
}

export default Stats