task :default => [:unit_tests, :jshint, :git]
multitask :dependencies => [:node_dependencies, :ruby_dependencies]
@run_options = {verbose: Rake.application.options.trace}
NYAN_REPORTER = 'nyan'

task :ruby_dependencies do
	rake_sh 'bundle install --path gems'
end

task :node_dependencies do
	rake_sh 'npm update'
end

task :jshint do
	rake_sh 'jshint ./tests ./lib'
end


task :git => :ruby_dependencies do 
	require 'bundler/setup'
	require 'git_repository'
	message = ENV['m']
	raise 'no commit message specified' if message.nil?
	git = GitRepository.new
	git.pull
	git.add
	git.commit(message: message )
	git.push
end

task :unit_tests do
	test_format = 'tdd'
	mocha("./tests",NYAN_REPORTER,test_format)
end

def committing_code?
	ENV['m'] != nil
end




def mocha(test_location,reporter,test_format)
	rake_sh "mocha #{test_location}  --ui #{test_format} --recursive --reporter #{reporter}"	
end

def rake_sh(command)
	sh command, @run_options
end


