import React,{ Component} from 'react';

class Comment extends Component {


    static proTypes = {
        comment: React.PropTypes.object.isRequired
        //引入React.propTypes：React.PropTypes 提供很多验证器来验证传入数据的有效性，当向props传入无效数据时，JavaScript 控制台会抛出警告。
    }
    constructor (){
        super()
        this.state = {timeString: ''}
    }
    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    _updateTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now()-comment.createTime) / 1000
        this.setState({
            timeString: duration > 60? `${Math.round(duration/60)} 分钟前`: `${Math.round(Math.max(duration,1))} 秒前`
        })
    }

        render(){
            return(
                <div className='comment'>
                    <div className='comment-user'>
                        <span>{this.props.comment.username}</span> :
                    </div>
                    <p>{this.props.comment.content}</p>
                    <sapn className='comment-createdtime'>{this.state.timeString}</sapn>
                </div>


            )
        }
}

export default Comment;