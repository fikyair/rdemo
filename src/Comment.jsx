import React,{ Component} from 'react';

class Comment extends Component {


    static proTypes = {
        comment: React.PropTypes.object.isRequired,
        //引入React.propTypes：React.PropTypes 提供很多验证器来验证传入数据的有效性，当向props传入无效数据时，JavaScript 控制台会抛出警告。
        onDeleteComment: React.PropTypes.func,
        index: React.PropTypes.number,
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
    componentWillUnmount () {
        clearInterval(this._timer)  //一条评论组件销毁时，要清楚计时器
    }

    _updateTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now()-comment.createTime) / 1000
        this.setState({
            timeString: duration > 60? `${Math.round(duration/60)} 分钟前`: `${Math.round(Math.max(duration,1))} 秒前`
        })
    }

    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }
    _getProcessedContent (content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

        render(){
            return(
                <div className='comment'>
                    <div className='comment-user'>
                        <span>{this.props.comment.username}</span> :
                    </div>
                    <p dangerouslySetInnerHTML={{
                        __html: this._getProcessedContent(this.props.comment.content)
                    }} />
                    <sapn className='comment-createdtime'>{this.state.timeString}</sapn>
                    <span className='comment-delete'
                          onClick={this.handleDeleteComment.bind(this)}>删除</span>
                </div>


            )
        }
}

export default Comment;