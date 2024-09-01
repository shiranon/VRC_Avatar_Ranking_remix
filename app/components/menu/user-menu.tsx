import { Link } from '@remix-run/react'
import { Folder, FolderHeart, LogOut, User } from 'lucide-react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '~/components/ui/popover'

export const UserMenu = () => {
	return (
		<div>
			<Popover>
				<PopoverTrigger>
					<div className="flex items-center p-4 h-14 -my-2">
						<Avatar>
							{/* WIP:ユーザー認証機能作成後、ユーザー画像に変える */}
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						</Avatar>
					</div>
				</PopoverTrigger>
				<PopoverContent className="p-0 w-[160px] space-y-1 sm:w-[250px] z-[2000]">
					<div className="hover:bg-slate-200">
						<Link to={'#'} className="p-2 flex justify-between ">
							<div>プロフィール</div>
							<User className="pr-2" />
						</Link>
					</div>
					<div className="hover:bg-slate-200">
						<Link to={'#'} className="p-2 flex justify-between ">
							<div>フォルダー</div>
							<Folder className="pr-2" />
						</Link>
					</div>
					<div className="hover:bg-slate-200">
						<Link to={'#'} className="p-2 flex justify-between ">
							<div>お気に入り</div>
							<FolderHeart className="pr-2" />
						</Link>
					</div>
					<div className="hover:bg-slate-200">
						<Link to={'#'} className="p-2 flex justify-between ">
							<div>ログアウト</div>
							<LogOut className="pr-2" />
						</Link>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	)
}
